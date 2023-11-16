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
        Schema::table('products', function (Blueprint $table) {
            $table->decimal('display_diagonal', 5, 1)->nullable();
            $table->string('display_resolution')->nullable();
            $table->string('matrix_type')->nullable();
            $table->string('screen_refresh_rate')->nullable();
            $table->string('screen_material')->nullable();
            $table->string('communication_standard')->nullable();
            $table->string('sim_card_dimensions')->nullable();
            $table->string('built-in_memory')->nullable();
            $table->string('the_maximum_volume_of_the_supported_memory_card')->nullable();
            $table->string('front_camera')->nullable();
            $table->string('features_of_the_front_camera')->nullable();
            $table->string('placement_of_the_front_camera')->nullable();
            $table->string('type_of_frontal_flash')->nullable();
            $table->string('front_camera_video_recording')->nullable();
            $table->text('additionally')->nullable();
            $table->string('name_of_the_processor')->nullable();
            $table->string('number_of_cores')->nullable();
            $table->string('main_camera')->nullable();
            $table->string('features_of_the_main_camera')->nullable();
            $table->integer('number_of_main_cameras')->nullable();
            $table->string('record_video_of_the_main_camera')->nullable();
            $table->text('additional_information_on_the_camera')->nullable();
            $table->text('video_recording')->nullable();
            $table->string('stabilization_method')->nullable();
            $table->string('body_material')->nullable();
            $table->string('connectors')->nullable();
            $table->string('navigation')->nullable();
            $table->integer('weight_g')->nullable();
            $table->string('dimensions')->nullable();
            $table->string('security')->nullable();
            $table->string('degree_of_dust_moisture_protection')->nullable();
            $table->string('sensors')->nullable();
            $table->string('supply_set')->nullable();
            $table->string('wireless_technologies')->nullable();
            $table->string('equipment')->nullable();
            $table->string('form_factor')->nullable();
            $table->string('features_of_the_case')->nullable();
            $table->string('color')->nullable();
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
        Schema::table('products', function (Blueprint $table) {
            $columns = [
                'display_diagonal',
                'display_resolution',
                'matrix_type',
                'screen_refresh_rate',
                'screen_material',
                'communication_standard',
                'sim_card_dimensions',
                'built-in_memory',
                'the_maximum_volume_of_the_supported_memory_card',
                'front_camera',
                'features_of_the_front_camera',
                'placement_of_the_front_camera',
                'type_of_frontal_flash',
                'front_camera_video_recording',
                'additionally',
                'name_of_the_processor',
                'number_of_cores',
                'main_camera',
                'features_of_the_main_camera',
                'number_of_main_cameras',
                'record_video_of_the_main_camera',
                'additional_information_on_the_camera',
                'video_recording',
                'stabilization_method',
                'body_material',
                'connectors',
                'navigation',
                'weight_g',
                'dimensions',
                'security',
                'degree_of_dust_moisture_protection',
                'sensors',
                'supply_set',
                'wireless_technologies',
                'equipment',
                'form_factor',
                'features_of_the_case',
                'color',
                'brand_registration_country',
                'warranty',
                'country_producer_of_the_product',
            ];

            $table->dropColumn($columns);
        });
    }
};
