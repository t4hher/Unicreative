<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DemandeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $demandes=DB::table('demandes')
        ->join('services', 'demandes.serviceId', '=', 'services.id')
        ->select('demandes.*', 'services.intitule')
        ->get();
        return $demandes;
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
            'nomComplet'=>'required|min:5',
            'tel'=>'required|min:10',
            'email'=>'required|min:10',
            'serviceId'=>'required',
            'description'=>'required|min:10',
        ]);


        $data = $request->all();
        $data['lue'] = 0;
        Demande::create($data);
        return response()->json([
            'message' => "Votre demande est envoyé avec succés.",
            'data'=>$data,
        ], 200);
    }

    /**
     * Display the specified resource.
     */

    public function show(Demande $demande)
    {
        $demande = DB::table('demandes')
        ->join('services', 'demandes.serviceId', '=', 'services.id')
        ->select('demandes.*', 'services.intitule as serviceNom')
        ->where('demandes.id', $demande->id)
        ->first();
        return response()->json(['demande'=>$demande]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Demande $demande)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Demande $demande)
    {
        if($request->has('lue')){
            $demande->lue=$request->lue;
            $demande->save();
            return response()->json([
                'message' => "L'état du demande de ".$demande->nomComplet." est modifiée avec succès.",
                'data'=>$demande,
            ], 200);
        }
        return response()->json(['message' => 'Aucune donnée fournie'], 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Demande $demande)
    {
        //
    }
}
