<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('authors')->insert([
            [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/men/1.jpg',
                'role' => 'Editor',
                'bio' => 'John is a seasoned editor with 10 years of experience in writing about interior design.',
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/women/1.jpg',
                'role' => 'Contributor',
                'bio' => 'Jane specializes in sustainable living and eco-friendly furniture.',
            ],
            [
                'name' => 'Emily Davis',
                'email' => 'emily@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/women/2.jpg',
                'role' => 'Writer',
                'bio' => 'Emily is passionate about modern minimalist designs and loves to share ideas.',
            ],
        ]);
    }
}