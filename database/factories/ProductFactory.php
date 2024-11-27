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
        $products = [
            ['name' => 'Modern Sofa', 'description' => 'Comfortable and stylish modern sofa with soft cushions.', 'price' => 4500000, 'stock' => 20],
            ['name' => 'Queen Size Bed', 'description' => 'Spacious queen-size bed with a wooden frame and headboard.', 'price' => 7000000, 'stock' => 10],
            ['name' => 'Dining Table Set', 'description' => 'Elegant dining table with six matching chairs.', 'price' => 8500000, 'stock' => 15],
            ['name' => 'Office Desk', 'description' => 'Sturdy wooden desk with drawers, perfect for home offices.', 'price' => 3000000, 'stock' => 25],
            ['name' => 'Patio Chair', 'description' => 'Durable and weather-resistant chair for outdoor use.', 'price' => 1500000, 'stock' => 30],
            ['name' => 'Bunk Bed', 'description' => 'Space-saving bunk bed for kids, with safety rails.', 'price' => 6500000, 'stock' => 8],
            ['name' => 'Shoe Rack', 'description' => 'Compact wooden shoe rack for organizing footwear.', 'price' => 1200000, 'stock' => 40],
            ['name' => 'Bathroom Cabinet', 'description' => 'Waterproof cabinet for bathroom storage.', 'price' => 2000000, 'stock' => 18],
            ['name' => 'Bookshelf', 'description' => 'Tall wooden bookshelf with adjustable shelves.', 'price' => 2500000, 'stock' => 22],
            ['name' => 'Decorative Mirror', 'description' => 'Round decorative mirror with a metal frame.', 'price' => 900000, 'stock' => 35],
            ['name' => 'TV Stand', 'description' => 'Modern TV stand with ample storage space.', 'price' => 2700000, 'stock' => 12],
            ['name' => 'Nightstand', 'description' => 'Compact nightstand with a drawer for storage.', 'price' => 800000, 'stock' => 50],
            ['name' => 'Bar Stool', 'description' => 'High wooden stool, perfect for kitchen bars.', 'price' => 1100000, 'stock' => 28],
            ['name' => 'Recliner Chair', 'description' => 'Comfortable recliner chair with adjustable positions.', 'price' => 4000000, 'stock' => 16],
            ['name' => 'Garden Bench', 'description' => 'Classic wooden bench for gardens or patios.', 'price' => 3200000, 'stock' => 10],
            ['name' => 'Kids Study Table', 'description' => 'Study table with colorful designs for kids.', 'price' => 1500000, 'stock' => 25],
            ['name' => 'Console Table', 'description' => 'Slim console table with a rustic finish.', 'price' => 2100000, 'stock' => 14],
            ['name' => 'Wall Shelf', 'description' => 'Floating wall shelf for decor and storage.', 'price' => 600000, 'stock' => 50],
            ['name' => 'Wardrobe', 'description' => 'Spacious wardrobe with sliding doors.', 'price' => 8000000, 'stock' => 5],
            ['name' => 'Coffee Table', 'description' => 'Stylish coffee table with a glass top.', 'price' => 2500000, 'stock' => 20],
        ];

        // Randomly pick a product from the array
        $product = $this->faker->randomElement($products);
        $seller = Seller::inRandomOrder()->first(); // Get random existing seller
        $category = Category::inRandomOrder()->first();

        return [
            'seller_id' => $seller->id, // Assign unique seller_id
            'category_id' => $category->id, // Assign unique category_id
            'name' => $product['name'],
            'description' => $product['description'],
            'price' => $product['price'],
            'stock' => $product['stock'],
            'image_url' => $this->faker->imageUrl(640, 480, 'product', true), // Generate a fake image URL
        ];
    }
}