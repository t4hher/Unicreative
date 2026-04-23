<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
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
             'login' => 'required',
             'password' => 'required',
         ]);
     
         $admin = Admin::where('login', $request->login)->where('password', $request->password)->first();
        if (!$admin) {
            return response()->json([
                'message' => 'Identifiants invalides.'
            ], 401);
         }
     
         $token = $admin->createToken('admin-token')->plainTextToken;
     
         return response()->json([
             'token' => $token,
             'admin' => $admin,
             'message' => 'Connexion réussie'
         ], 200);
     }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin)
    {
        
    }
}
