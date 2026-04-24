<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Message::all();
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
        Message::create($data);
        return response()->json([
            'message' => "Votre message est envoyé avec succés.",
            'data'=>$data,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        return response()->json(['message'=>$message]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        if($request->has('lue')){
            $message->lue=$request->lue;
            $message->save();
            return response()->json([
                'message' => "L'état du message de ".$message->nomComplet." est modifiée avec succès.",
                'data'=>$message,
            ], 200);
        }
        return response()->json(['message' => 'Aucune donnée fournie'], 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }
}
