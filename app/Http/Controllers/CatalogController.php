<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category as ModelsCategory;
use App\Models\Product as ModelsProduct;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function index()
    {

    {
        $data = [
            'products' => ModelsProduct::with(['category'])->get(),
            'categories' => ModelsCategory::get()
        ];
        return Inertia::render('Home/Catalog/Index', $data);
    }
    }
    public function show(ModelsProduct $product)
    {

    {
        $data = [
            'product' => $product->load(['category','seller.products']),
            'categories' => ModelsCategory::get(),
            'products' => ModelsProduct::with(['category'])->get(),
        ];
        return Inertia::render('Home/Catalog/Show', $data);
    }
    }

}