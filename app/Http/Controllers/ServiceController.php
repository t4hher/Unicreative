<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Service::all();
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
            'intitule'=>'required|min:5',
            'categorie'=>'required|in:Digital,Print',
            'description'=>'required|max:2048',
            'image'=>'max:2048',
        ]);

        $data = $request->all();
        if(isset($request->image)){
            $request->image->store("services", "public");
            $chemin = $request->image->store("services", "public");
            $data["image"]=$chemin;
        }
        Service::create($data);
        return response()->json([
            'message' => "Le service ".$request->titre." est ajouté avec succès",
            'data'=>$data,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        return response()->json(['service'=>$service]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        $request->validate([
            'intitule'=>'min:5',
            'categorie'=>'in:Digital,Print',
            'description'=>'max:2048',
            'image'=>'nullable|image|max:2048',
        ]);

        $data = $request->all();
        if($request->hasFile('image')){
            if ($service->image &&Storage::disk('public')->exists($service->image)) {
                Storage::disk('public')->delete($service->image);
            }
            $chemin = $request->image->store("services", "public");
            $data["image"]=$chemin;
        } else {
            unset($data['image']);
        }
        $service->update($data);
        return response()->json([
            'message' => "Le service ".$request->titre." est modifié avec succès",
            'data'=>$service,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        if($service->image){
            if (Storage::disk('public')->exists($service->image)) {Storage::disk('public')->delete($service->image);}
        }
        $service->delete();
        return response()->json([
            "message"=>"service supprimer !!",
            "id"=>$service->id,
        ]);
        

    }
}
