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
        $request->validate([
            'nomcomplet'=>'required',
            'tel'=>'required',
            'email'=>'required',
            'offreId'=>'required',
            'sexe'=>'required',
            'lettreMotivation'=>'required|max:2048',
            'CV'=>'max:2048',
        ]);


        $data = $request->all();
        $data['lue'] = 0;
        if(isset($request->lettreMotivation)){
            $data["lettreMotivation"] = $request->file('lettreMotivation')->store("candidatures", "public");
        }
        if(isset($request->CV)){
            $data["CV"] = $request->file('CV')->store("candidatures", "public");
        }

        Candidature::create($data);
        return response()->json([
            'message' => "Votre candidature est envoyé avec succés.",
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
                'message' => "L'état du candidature de ".$candidature->nomComplet." est modifiée avec succès.",
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
