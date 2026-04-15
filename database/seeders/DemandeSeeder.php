<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DemandeSeeder extends Seeder
{
    
    public function run(): void
    {
        DB::table("demandes")->insert([
            [
                "serviceId"=>2,
                "nomComplet"=>"mehdi ben chakroun",
                "email"=>"mehdi@gmail.com",
                "tel"=>"0675645342",
                "description"=>"lorem htrfder nhytlikjb nbbejcnxkkllkmrhbnr jhdvv",
                "lue"=>true,
            ],
            [
                "serviceId"=>3,
                "nomComplet"=>"mestapha belayed",
                "email"=>"mestapha@gmail.com",
                "tel"=>"0675645442",
                "description"=>"lorem htrfder nhytlikjb nbbejcnxkkllkmrhbnr jhdvv",
                "lue"=>false,
            ]
        ]);
    }
}
