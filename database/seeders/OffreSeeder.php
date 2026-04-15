<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class OffreSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('offres')->insert([
            [
                "titre"=>"Développeur front-end React",
                "description"=>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?",
                "typeContrat"=>"Stage(PFE)",
                "profil"=>"developpeur full stack",
                "image"=>null,
            ],
            [
                "titre"=>"Illustrateur / Motion Designer",
                "description"=>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?",
                "typeContrat"=>"Freelance",
                "profil"=>"developpeur mobile",
                "image"=>null,
            ],
        ]);
    }
}
