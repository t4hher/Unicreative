<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Notifiable;

class Admin extends User 
{
    use HasApiTokens, Notifiable;

    protected $table = 'admins';

    protected $fillable = [
        'login',
        'password',
    ];

    protected $hidden = [
        'password',
    ];
}