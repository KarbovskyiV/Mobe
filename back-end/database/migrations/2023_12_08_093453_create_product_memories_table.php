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
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('built_in_memory');
        });

        Schema::create('product_memories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id');
            $table->enum('built_in_memory', ['64GB', '128GB', '256GB', '512GB']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('built_in_memory')->nullable();
        });

        Schema::dropIfExists('product_memories');
    }
};
