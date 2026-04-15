<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CandidatureSeeder extends Seeder
{
    public function run(): void
    {
        DB::table("candidatures")->insert([
            [
                "offreId"=>2,
                "nomcomplet"=>"mohamed amllah",
                "sexe"=>"H",
                "tel"=>"06789876543",
                "email"=>"mohamed@gmail.com",
                "CV"=>"demmande stage",
                "lettreMotivation"=>null,
                "lue"=>false,
            ],
            [
                "offreId"=>3,
                "nomcomplet"=>"fatima lfatwakuya",
                "sexe"=>"F",
                "tel"=>"06745876543",
                "email"=>"fatima@gmail.com",
                "CV"=>"demmande travalle",
                "lettreMotivation"=>null,
                "lue"=>true,
            ]
        ]);
    }
}
