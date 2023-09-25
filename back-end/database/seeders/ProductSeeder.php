<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $appleCategory = Category::query()->where('name', 'Смартфони Apple')->first();
        $appleProducts = [
            ['name' => 'iPhone 14 Pro Max'],
            ['name' => 'iPhone 14 Pro'],
            ['name' => 'iPhone 14 Plus'],
            ['name' => 'iPhone 14'],
            ['name' => 'iPhone 13'],
        ];
        foreach ($appleProducts as $productData) {
            $productData['category_id'] = $appleCategory->id;
            Product::query()->firstOrCreate(['name' => $productData['name']], $productData);
        }

        $samsungCategory = Category::query()->where('name', 'Смартфони Samsung')->first();
        $samsungProducts = [
            ['name' => 'Galaxy Fold5 | Flip5'],
            ['name' => 'Galaxy S23 Ultra | S23+ | S23'],
            ['name' => 'Galaxy S22 | S21FE'],
            ['name' => 'Galaxy A54 | A34'],
            ['name' => 'Galaxy A24 | A14'],
        ];
        foreach ($samsungProducts as $productData) {
            $productData['category_id'] = $samsungCategory->id;
            Product::query()->firstOrCreate(['name' => $productData['name']], $productData);
        }

        $xiaomiCategory = Category::query()->where('name', 'Смартфони Xiaomi')->first();
        $xiaomiProducts = [
            ['name' => 'Redmi Note 12 Pro+'],
            ['name' => 'Redmi Note 12 Pro | 12 Pro 5G'],
            ['name' => 'Redmi Note 12S'],
            ['name' => 'Redmi Note 12 | 12 5G'],
            ['name' => 'Redmi 12 | 12C'],
        ];
        foreach ($xiaomiProducts as $productData) {
            $productData['category_id'] = $xiaomiCategory->id;
            Product::query()->firstOrCreate(['name' => $productData['name']], $productData);
        }

        $motorolaCategory = Category::query()->where('name', 'Смартфони Motorola')->first();
        $motorolaProducts = [
            ['name' => 'Motorola G13'],
            ['name' => 'Motorola G72'],
            ['name' => 'Motorola G32'],
            ['name' => 'Motorola E13'],
            ['name' => 'Motorola Edge 40'],
        ];
        foreach ($motorolaProducts as $productData) {
            $productData['category_id'] = $motorolaCategory->id;
            Product::query()->firstOrCreate(['name' => $productData['name']], $productData);
        }

        $nokiaCategory = Category::query()->where('name', 'Смартфони Nokia')->first();
        $nokiaProducts = [
            ['name' => 'Nokia C21 Plus'],
            ['name' => 'Nokia C22'],
            ['name' => 'Nokia C31'],
            ['name' => 'Nokia G22'],
            ['name' => 'Nokia C32'],
        ];
        foreach ($nokiaProducts as $productData) {
            $productData['category_id'] = $nokiaCategory->id;
            Product::query()->firstOrCreate(['name' => $productData['name']], $productData);
        }

        $accessoriesCategory = Category::query()->where('name', 'Аксесуари до смартфонів')->first();
        $accessoriesProducts = [
            ['name' => 'Чохли для телефонів'],
            ['name' => 'Захисні плівки та скло'],
            ['name' => 'Навушники'],
            ['name' => "Карти пам’яті"],
            ['name' => 'Кабелі та перехідники'],
        ];
        foreach ($accessoriesProducts as $productData) {
            $productData['category_id'] = $accessoriesCategory->id;
            Product::query()->firstOrCreate(['name' => $productData['name']], $productData);
        }
    }
}
