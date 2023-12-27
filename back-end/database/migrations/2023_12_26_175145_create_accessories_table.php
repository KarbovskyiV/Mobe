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
        Schema::create('accessories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('category_id')->constrained();
            // TODO: move subcategory to separate table
            $table->string('subcategory');
            $table->integer('price');
            $table->string('compatible_model');
            $table->string('color');
            $table->string('form_factor')->nullable();
            $table->string('material')->nullable();
            $table->text('description')->nullable();
            $table->string('style')->nullable();
            $table->string('features')->nullable();
            $table->string('legal_information')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accessories');
    }
};
