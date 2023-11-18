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
            $table->boolean('is_new')->after('name');
            $table->boolean('is_promotion')->after('is_new');
            $table->boolean('is_popular')->after('is_promotion');
            $table->boolean('is_hot_price')->after('is_popular');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn([
                'is_new',
                'is_promotion',
                'is_popular',
                'is_hot_price'
            ]);
        });
    }
};
