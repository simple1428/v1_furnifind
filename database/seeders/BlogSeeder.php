<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('blogs')->insert([
            [
                'title' => 'Modern Minimalist Design Trends 2024',
                'category' => 'Interior Design',
                'date' => '2024-01-15',
                'image' => 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
                'excerpt' => 'Discover the latest trends in minimalist furniture design and how to incorporate them into your home.',
                'read_time' => '5 min read',
                'author_id' => 1,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'Sustainable Furniture: A Guide to Eco-Friendly Living',
                'category' => 'Sustainability',
                'date' => '2024-01-12',
                'image' => 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126',
                'excerpt' => 'Learn about sustainable materials and practices in modern furniture manufacturing.',
                'read_time' => '7 min read',
                'author_id' => 2,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'Top Furniture Trends for 2024',
                'category' => 'Trends',
                'date' => '2024-01-10',
                'image' => 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
                'excerpt' => 'Explore the most popular furniture styles to watch for this year.',
                'read_time' => '6 min read',
                'author_id' => 1,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'The Art of Choosing the Perfect Sofa',
                'category' => 'Guides',
                'date' => '2024-01-08',
                'image' => 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
                'excerpt' => 'Tips for finding a sofa that fits your style and living space.',
                'read_time' => '8 min read',
                'author_id' => 1,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'Furniture Care: How to Make It Last',
                'category' => 'Maintenance',
                'date' => '2024-01-05',
                'image' => 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
                'excerpt' => 'Learn the best practices for maintaining your furniture.',
                'read_time' => '4 min read',
                'author_id' => 3,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'Maximizing Small Spaces with Multifunctional Furniture',
                'category' => 'Small Spaces',
                'date' => '2024-01-03',
                'image' => 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
                'excerpt' => 'Discover furniture solutions designed for compact living spaces.',
                'read_time' => '5 min read',
                'author_id' => 2,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'Eco-Friendly Furniture Brands to Watch in 2024',
                'category' => 'Sustainability',
                'date' => '2024-01-02',
                'image' => 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
                'excerpt' => 'Meet the brands that are making a difference in sustainable furniture.',
                'read_time' => '7 min read',
                'author_id' => 1,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'The Psychology of Color in Interior Design',
                'category' => 'Interior Design',
                'date' => '2024-01-01',
                'image' => 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
                'excerpt' => 'How color affects mood and how to use it effectively in your space.',
                'read_time' => '6 min read',
                'author_id' => 1,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'Affordable Furniture Hacks for Budget-Conscious Shoppers',
                'category' => 'Budget',
                'date' => '2024-01-15',
                'image' => 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
                'excerpt' => 'Get the look you want without breaking the bank.',
                'read_time' => '5 min read',
                'author_id' => 1,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
            [
                'title' => 'The History and Evolution of Furniture Design',
                'category' => 'History',
                'date' => '2024-01-12',
                'image' => 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
                'excerpt' => 'A journey through the most significant eras in furniture design.',
                'read_time' => '7 min read',
                'author_id' => 1,
                'tags' => json_encode(["sustainability","eco-friendly","furniture"]),
            ],
        ]);
    }
}