<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductMemory;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductMemorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        try {
            DB::beginTransaction();

            $products = Product::all();

            foreach ($products as $product) {
                $memorySizes = ['64GB', '128GB', '256GB', '512GB'];

                shuffle($memorySizes);
                $numberOfMemories = random_int(1, count($memorySizes));
                $selectedMemorySizes = array_slice($memorySizes, 0, $numberOfMemories);

                foreach ($selectedMemorySizes as $memorySize) {
                    ProductMemory::create([
                        'product_id' => $product->id,
                        'built_in_memory' => $memorySize,
                    ]);
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
