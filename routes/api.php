<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CandidatureController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\RealisationController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('admin', AdminController::class);
Route::resource('services', ServiceController::class);
Route::resource('realisations', RealisationController::class);
Route::resource('offres', OffreController::class);
Route::resource('messages', MessageController::class);
Route::resource('demandes', DemandeController::class);
Route::resource('candidatures', CandidatureController::class);