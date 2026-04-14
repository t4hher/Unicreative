<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('candidatures', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("offreId");
            $table->foreign("offreId")->references("id")->on("offres");
            $table->string("nomcomplet");
            $table->enum("sexe",["H","F"]);
            $table->string('tel');
            $table->string('email');
            $table->string('CV');
            $table->string('lettreMotivation')->nullable();
            $table->boolean("lue");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidatures');
    }
};
