<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
   
    public function run(): void
{
    DB::table('services')->insert([
        [
            "intitule" => "Création Site Web",
            "categorie" => "Digital",
            "description" => "Lorem ipsum dolor sit, amet consectetur...",
            "image" => null,
        ],
        [
            "intitule" => "Conception Graphique",
            "categorie" => "Print",
            "description" => "Lorem ipsum dolor sit, amet consectetur...",
            "image" => null,
        ],
    ]);
}
}
