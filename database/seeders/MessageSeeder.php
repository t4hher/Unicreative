<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessageSeeder extends Seeder
{

    public function run(): void
    {
        DB::table("messages")->insert(
            [
                "nomComplet"=>"Ali Mohhamed",
                "contactInfo"=>"0600000000",
                "message"=>"bounjoure mes amis ejhdvj bcvvfhdlkhbdjjdkd",
                "lue"=>true,
            ],
            [
                "nomComplet"=>"amine mahrez",
                "contactInfo"=>"amin@gmail.com",
                "message"=>"bounjoure mes  siloijgcxsfrfjkjahak bhbvczbecnhfbncjsvshbnc",
                "lue"=>false,
            ],
        );
    }
}
