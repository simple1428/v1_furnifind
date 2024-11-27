<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Seller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SellerController extends Controller
{
    public function show(Seller $seller)
    {
        $data = [
            'seller' => $seller->load('products.category'),
            'categories' => Category::get()
        ];
        return Inertia::render('Home/Seller/Show',$data);
    }
}