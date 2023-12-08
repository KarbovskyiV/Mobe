<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Apple phones',
            'Samsung phones',
            'Xiaomi phones',
            'Motorola phones',
            'Nokia phones',
        ];

        foreach ($categories as $categoryName) {
            $category = Category::query()->where('name', $categoryName)->first();

            if (!$category) {
                Category::query()->create(['name' => $categoryName]);
            }
        }
    }
}
