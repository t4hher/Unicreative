<?php

namespace App\Http\Controllers;

use App\Models\Candidature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CandidatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $candidatures=DB::table('candidatures')
        ->join('offres', 'candidatures.offreId', '=', 'offres.id')
        ->select('candidatures.*', 'offres.titre')
        ->get();
        return $candidatures;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['lue'] = 0;
        if(isset($request->lettreMotivation)){
            $request->lettreMotivation->store("candidatures", "public");
            $chemin = $request->lettreMotivation->store("candidatures", "public");
            $data["lettreMotivation"]=$chemin;
        }
        if(isset($request->CV)){
            $request->CV->store("candidatures", "public");
            $chemin = $request->CV->store("candidatures", "public");
            $data["CV"]=$chemin;
        }

        Candidature::create($data);
        return response()->json([
            'message' => "La Candidature ".$request->nomcomplet." est ajoutée avec succès",
            'data'=>$data,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Candidature $candidature)
    {
        $candidature=DB::table('candidatures')
        ->join('offres', 'candidatures.offreId', '=', 'offres.id')
        ->select('candidatures.*', 'offres.titre')
        ->where('candidatures.id', $candidature->id)
        ->first();
        return response()->json(['candidature'=>$candidature]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Candidature $candidature)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Candidature $candidature)
    {
        if($request->has('lue')){
            $candidature->lue=$request->lue;
            $candidature->save();
            return response()->json([
                'message' => "La candidature de ".$candidature->nomcomplet." est lu avec succès",
                'data'=>$candidature,
            ], 200);
        }
        return response()->json(['message' => 'Aucune donnée fournie'], 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Candidature $candidature)
    {
        //
    }
}
