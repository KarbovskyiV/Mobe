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
            'Смартфони Apple',
            'Смартфони Samsung',
            'Смартфони Xiaomi',
            'Смартфони Motorola',
            'Смартфони Nokia',
            'Аксесуари до смартфонів',
        ];

        foreach ($categories as $categoryName) {
            $category = Category::query()->where('name', $categoryName)->first();

            if (!$category) {
                Category::query()->create(['name' => $categoryName]);
            }
        }
    }
}
