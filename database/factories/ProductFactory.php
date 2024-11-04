<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use App\Models\Seller;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'seller_id' => Seller::factory(), // Membuat seller baru
            'category_id' => Category::factory(), // Membuat kategori baru
            'name' => $this->faker->unique()->word(),
            'description' => $this->faker->sentence(10),
            'price' => $this->faker->randomFloat(2, 10, 1000), // Harga antara 10 dan 1000
            'stock' => $this->faker->numberBetween(1, 100), // Stok antara 1 dan 100
            'image_url' => $this->faker->imageUrl(640, 480, 'product', true), // Menghasilkan URL gambar palsu
        ];
    }
}
