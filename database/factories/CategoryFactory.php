<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Category::class;

    public function definition()
    {
            $categories = [
                "Living Room",
                "Bedroom",
                "Dining Room",
                "Home Office",
                "Outdoor",
                "Kids' Room",
                "Entryway",
                "Bathroom",
                "Storage & Organization",
                "Decor",
            ];

            return [
                'name' => $this->faker->unique()->randomElement($categories), // Nama kategori
                'description' => $this->faker->sentence(10), // Deskripsi kategori
                'image' => $this->faker->imageUrl(640, 480, 'furniture', true, 'Category Image'), // Gambar kategori
            ];
    }
}