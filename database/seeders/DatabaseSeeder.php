<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            SellerSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            AuthorSeeder::class,
            BlogSeeder::class,
        ]);
    }
}