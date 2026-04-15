<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RealisationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('realisations')->insert([
            [
                "titre"=>"SATLAT",
                "type"=>"Digital",
                "image"=>null,
            ],
            [
                "titre"=>"Ford Banner",
                "type"=>"Print",
                "image"=>null,
            ],
        ]);
    }
}
