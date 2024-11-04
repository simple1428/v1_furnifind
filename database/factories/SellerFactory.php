<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Seller>
 */
class SellerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'store_name' => $this->faker->unique()->company(),
            'address' => $this->faker->address(),
            'phone_number' => $this->faker->phoneNumber(),
            'logo' => $this->faker->imageUrl(200, 200, 'business', true, 'logo'), // Link logo palsu
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}