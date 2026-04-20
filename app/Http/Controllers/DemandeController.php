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
        //
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
                'message' => "La demande de ".$demande->nomComplet." est lu avec succès",
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
