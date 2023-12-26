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
        Schema::table('likeables', function (Blueprint $table) {
            $table->dropConstrainedForeignId('product_id');

            $table->foreignId('review_id')->after('user_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('likeables', function (Blueprint $table) {
            $table->dropConstrainedForeignId('review_id');

            $table->foreignId('product_id')->after('user_id')->constrained();
        });
    }
};
