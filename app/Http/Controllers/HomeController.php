<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories  = Category::all();
        return Inertia::render('Home/Index', [
            'products' => $products, // Kirim data produk ke komponen Home
            'categories' => $categories, // Kirim data produk ke komponen Home
        ]);
    }
}