<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        try {
            DB::beginTransaction();

            $categories = [
                'Apple phones',
                'Samsung phones',
                'Xiaomi phones',
                'Motorola phones',
                'Nokia phones',
                'Phones’ accessories',
            ];

            foreach ($categories as $categoryName) {
                $category = Category::query()->where('name', $categoryName)->first();

                for ($i = 0; $i < 5; $i++) { // Generate 5 products for each category
                    $productData = [
                        'name' => $faker->unique()->words(3, true),
                        'price' => $faker->numberBetween(10000, 20000),
                        'category_id' => $category->id,
                        'is_new' => $faker->boolean(),
                        'is_promotion' => $faker->boolean(),
                        'is_popular' => $faker->boolean(),
                        'is_hot_price' => $faker->boolean(),
                        'display_diagonal' => $faker->randomFloat(1, 5, 7),
                        'display_resolution' => $faker->randomElement(['1920x1080', '2560x1440', '3840x2160']),
                        'matrix_type' => $faker->randomElement(['IPS', 'AMOLED', 'LCD']),
                        'screen_refresh_rate' => $faker->randomElement(['60Hz', '120Hz', '240Hz']),
                        'screen_material' => $faker->randomElement(['Gorilla Glass', 'AMOLED', 'LCD']),
                        'communication_standard' => $faker->randomElement(['4G LTE', '5G']),
                        'sim_card_dimensions' => $faker->randomElement(['Nano-SIM', 'Micro-SIM']),
                        'built-in_memory' => $faker->randomElement(['128GB', '256GB', '512GB']),
                        'the_maximum_volume_of_the_supported_memory_card' => $faker->randomElement(['256GB', '512GB']),
                        'operating_system' => $faker->randomElement(["iOS", 'HarmonyOS', 'Android']),
                        'front_camera' => $faker->randomElement(['12MP', '16MP', '20MP']),
                        'features_of_the_front_camera' => $faker->sentence,
                        'placement_of_the_front_camera' => $faker->randomElement(['Notch', 'Punch hole', 'Pop-up']),
                        'type_of_frontal_flash' => $faker->randomElement(['LED', 'Retina Flash']),
                        'front_camera_video_recording' => $faker->randomElement(['4K', '1080p']),
                        'additionally' => $faker->paragraph,
                        'name_of_the_processor' => $faker->word,
                        'number_of_cores' => $faker->randomElement(['2', '4', '6', '8']),
                        'main_camera' => $faker->randomElement(['48MP', '64MP', '108MP']),
                        'features_of_the_main_camera' => $faker->sentence,
                        'number_of_main_cameras' => $faker->numberBetween(1, 4),
                        'record_video_of_the_main_camera' => $faker->randomElement(['4K', '1080p']),
                        'additional_information_on_the_camera' => $faker->paragraph,
                        'video_recording' => $faker->paragraph,
                        'stabilization_method' => $faker->randomElement(['OIS', 'EIS']),
                        'body_material' => $faker->randomElement(['Glass', 'Metal', 'Plastic']),
                        'connectors' => $faker->randomElement(['USB-C', 'Lightning']),
                        'navigation' => $faker->randomElement(['GPS', 'GLONASS', 'Galileo']),
                        'weight_g' => $faker->numberBetween(100, 400),
                        'dimensions' => $faker->randomElement(['150x70x8mm', '160x75x9mm']),
                        'security' => $faker->randomElement(['Fingerprint', 'Face unlock']),
                        'degree_of_dust_moisture_protection' => $faker->randomElement(['IP67', 'IP68']),
                        'sensors' => $faker->randomElement(['Accelerometer', 'Gyroscope', 'Proximity']),
                        'supply_set' => $faker->sentence,
                        'wireless_technologies' => $faker->randomElement(['Wi-Fi 6', 'Bluetooth 5.0']),
                        'equipment' => $faker->sentence,
                        'form_factor' => $faker->randomElement(['Bar', 'Foldable', 'Clamshell']),
                        'features_of_the_case' => $faker->sentence,
                        'color' => $faker->safeColorName,
                        'brand_registration_country' => $faker->country,
                        'warranty' => $faker->randomElement(['1 year', '2 years']),
                        'country_producer_of_the_product' => $faker->country,
                    ];

                    Product::query()->firstOrCreate(['name' => $productData['name']], $productData);
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
