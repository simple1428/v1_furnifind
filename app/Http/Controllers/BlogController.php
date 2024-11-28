<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $data = [
            'categories' => Category::get(),
            'blogs' => Blog::with(['author'])->get()
        ];
        return Inertia::render('Blog/Index',$data);
    }
    public function show(Blog $blog)
    {
        $data = [
            'categories' => Category::get(),
            'blog' => $blog->load((['author'])),


            'blogs' => Blog::with(['author'])->get()
        ];
        return Inertia::render('Blog/Show',$data);
    }
}