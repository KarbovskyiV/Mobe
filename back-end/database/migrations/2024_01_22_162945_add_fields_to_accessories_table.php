<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('accessories', function (Blueprint $table) {
            $table->string('compatible_brand')->nullable();
            $table->string('brand_registration_country')->nullable();
            $table->string('warranty')->nullable();
            $table->string('country_producer_of_the_product')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('accessories', function (Blueprint $table) {
            $table->dropColumn(
                ['country_producer_of_the_product', 'warranty', 'brand_registration_country', 'compatible_brand']
            );
        });
    }
};
