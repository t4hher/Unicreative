<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OffreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Offre::all();
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
            'description'=>'required|min:5',
            'typeContrat'=>'required|min:3',
            'profil'=>'required|min:10',
            'image'=>'max:2048',
        ]);

        $data = $request->all();
        if(isset($request->image)){
            $request->image->store("offres", "public");
            $chemin = $request->image->store("offres", "public");
            $data["image"]=$chemin;
            Offre::create($data);
        }
        return response()->json([
            'message' => "L'offre ".$request->titre." est ajouté avec succès",
            'data'=>$data,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Offre $offre)
    {
        return response()->json(['offre'=>$offre]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offre $offre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Offre $offre)
    {
        $request->validate([
            'titre'=>'required|min:5',
            'description'=>'required|min:5',
            'typeContrat'=>'required|min:3',
            'profil'=>'required|min:5',
            'image'=>'nullable|image|max:2048',
        ]);

        $data = $request->all();
        if($request->hasFile('image')){
            if ($offre->image && Storage::disk('public')->exists($offre->image)) {
                Storage::disk('public')->delete($offre->image);
            }
            $chemin = $request->image->store("offres", "public");
            $data["image"]=$chemin;
        } else {
            unset($data['image']);
        }
        $offre->update($data);
        return response()->json([
            'message' => "L'offre ".$request->titre." est modifié avec succès",
            'data'=>$offre,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offre $offre)
    {
        if($offre->image){
            if (Storage::disk('public')->exists($offre->image)) {Storage::disk('public')->delete($offre->image);}
        }
        $offre->delete();
        return response()->json([
            "message"=>"L'offre ".$offre->titre." est supprimé avec succès",
            "id"=>$offre->id,
        ]);
    }
}
