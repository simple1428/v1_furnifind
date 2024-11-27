<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Seller>
 */
class SellerFactory extends Factory
{
    private static $uniqueSellers = null;

    public function definition()
    {
        // Inisialisasi array sellers jika belum ada
        if (self::$uniqueSellers === null) {
            self::$uniqueSellers = [
                ['store_name' => 'FurniCraft', 'address' => '123 Maple Street, Jepara', 'phone_number' => '081234567890', 'status' => 'active'],
                ['store_name' => 'Wooden Wonders', 'address' => '45 Oak Lane, Surabaya', 'phone_number' => '081987654321', 'status' => 'inactive'],
                ['store_name' => 'Modern Living', 'address' => '88 Pine Road, Jakarta', 'phone_number' => '081223344556', 'status' => 'active'],
                ['store_name' => 'Comfort Creations', 'address' => '77 Cedar Avenue, Bandung', 'phone_number' => '081112223334', 'status' => 'active'],
                ['store_name' => 'Elegant Designs', 'address' => '66 Birch Boulevard, Semarang', 'phone_number' => '081998877665', 'status' => 'inactive'],
                ['store_name' => 'Rustic Charm', 'address' => '99 Elm Street, Malang', 'phone_number' => '081556677889', 'status' => 'active'],
                ['store_name' => 'Urban Decor', 'address' => '11 Willow Way, Yogyakarta', 'phone_number' => '081778899001', 'status' => 'active'],
                ['store_name' => 'Artisan Furniture', 'address' => '22 Poplar Path, Bali', 'phone_number' => '081334455667', 'status' => 'inactive'],
                ['store_name' => 'Premium Comfort', 'address' => '33 Sycamore Circle, Medan', 'phone_number' => '081445566778', 'status' => 'active'],
                ['store_name' => 'Vintage Vibes', 'address' => '44 Aspen Alley, Balikpapan', 'phone_number' => '081556677889', 'status' => 'active'],
                ['store_name' => 'Classic Comfort', 'address' => '55 Oak Ridge, Makassar', 'phone_number' => '081223344557', 'status' => 'inactive'],
                ['store_name' => 'Stylish Spaces', 'address' => '66 Maple Drive, Bandung', 'phone_number' => '081445566779', 'status' => 'active'],
                ['store_name' => 'Woodcraft Wonders', 'address' => '77 Walnut Street, Surabaya', 'phone_number' => '081556677880', 'status' => 'active'],
                ['store_name' => 'Modern Touch', 'address' => '88 Pine Hill, Yogyakarta', 'phone_number' => '081223344558', 'status' => 'inactive'],
                ['store_name' => 'Home Harmony', 'address' => '99 Cedar Lane, Jakarta', 'phone_number' => '081334455668', 'status' => 'active'],
                ['store_name' => 'Luxury Living', 'address' => '100 Maple Circle, Medan', 'phone_number' => '081445566780', 'status' => 'inactive'],
                ['store_name' => 'Trendy Furniture', 'address' => '101 Birch Boulevard, Bali', 'phone_number' => '081778899002', 'status' => 'active'],
                ['store_name' => 'Natural Creations', 'address' => '102 Elm Avenue, Semarang', 'phone_number' => '081998877666', 'status' => 'active'],
                ['store_name' => 'Elegant Interiors', 'address' => '103 Oak Lane, Malang', 'phone_number' => '081223344559', 'status' => 'active'],
                ['store_name' => 'Cozy Comforts', 'address' => '104 Pine Path, Jepara', 'phone_number' => '081334455669', 'status' => 'inactive']
            ];

            shuffle(self::$uniqueSellers); // Acak array agar pemilihan seller lebih random
        }

        // Ambil satu seller dari array
        $seller = array_pop(self::$uniqueSellers);

        return [
            'user_id' => User::factory(), // Buat user baru
            'store_name' => $seller['store_name'],
            'address' => $seller['address'],
            'phone_number' => $seller['phone_number'],
            'logo' => $this->faker->imageUrl(200, 200, 'business', true, 'logo'), // URL logo palsu
            'status' => $seller['status'],
        ];
    }
}