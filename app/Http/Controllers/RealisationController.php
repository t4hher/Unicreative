<?php

namespace App\Http\Controllers;

use App\Models\Realisation;
use Illuminate\Http\Request;

class RealisationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Realisation::all();
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
            'titre'=>'required|min:5',
            'type'=>'required|in:Digital,Print',
            'image'=>'max:2048',
        ]);

        $data = $request->all();
        if(isset($request->image)){
            $request->image->store("realisations", "public");
            $chemin = $request->image->store("realisations", "public");
            $data["image"]=$chemin;
            Realisation::create($data);
        }
        return response()->json([
            'message' => "La réalisation ".$request->titre." est ajoutée avec succès",
            'data'=>$data,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Realisation $realisation)
    {
        return response()->json(['realisation'=>$realisation]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Realisation $realisation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Realisation $realisation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Realisation $realisation)
    {
        $realisation->delete();
        return response()->json([
            "message"=>"Réalisation supprimer !!",
            "id"=>$realisation->id,
        ]);
    }
}
