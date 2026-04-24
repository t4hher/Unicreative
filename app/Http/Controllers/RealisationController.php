<?php

namespace App\Http\Controllers;

use App\Models\Realisation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        }
        Realisation::create($data);
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
        $request->validate([
            'titre'=>'required|min:5',
            'type'=>'in:Digital,Print',
            'image'=>'nullable|image|max:2048',
        ]);

        $data = $request->all();
        if($request->hasFile('image')){
            if ($realisation->image && Storage::disk('public')->exists($realisation->image)) {
                Storage::disk('public')->delete($realisation->image);
            }
            $chemin = $request->image->store("realisations", "public");
            $data["image"]=$chemin;
        } else {
            unset($data['image']);
        }
        $realisation->update($data);
        return response()->json([
            'message' => "La réalisation ".$request->titre." est modifiée avec succès",
            'data'=>$realisation,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request ,Realisation $realisation)
    {
        if($realisation->image){
            if (Storage::disk('public')->exists($realisation->image)) {Storage::disk('public')->delete($realisation->image);}
        }
        $realisation->delete();
        return response()->json([
            "message"=>"La réalisation ".$realisation->titre." est supprimée avec succès",
            "id"=>$realisation->id,
        ]);
    }
}
