import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  const price = parseFloat(product.price);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  console.log(product);

  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
      data-aos="fade-up"
    >
      {/* Badge Diskon */}
      {product.discount && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            -{product.discount}%
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="absolute top-4 right-4 z-10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-300">
          <IoHeartOutline className="w-5 h-5" />
        </button>
        <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-300">
          <IoCartOutline className="w-5 h-5" />
        </button>
      </div>

      {/* Image Container */}
      <Link href={route("catalog.show", product.id)} className="block relative">
        <div className="relative overflow-hidden aspect-square">
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300 z-10" />
          <div
            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            style={{
              backgroundImage:
                "url('https://firstteak.com/storage/product/product1714642708_1.jpg')",
            }}
          />
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-gray-800 font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-yellow-400 hover:text-white">
            Quick View
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Categories & Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
            {product.category.name}
          </span>
          {product.isNew && (
            <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
              New Arrival
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-lg font-bold text-gray-800">
              <FormatRupiah value={price} />
            </p>
            {product.oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                <FormatRupiah value={product.oldPrice} />
              </p>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 font-medium">
              {product.rating || "4.5"}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gray-100 hover:bg-yellow-400 text-gray-800 hover:text-white py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 mt-2">
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;

// product: {
//     name: "Product Name",
//     price: 1000000,
//     oldPrice: 1200000, // optional
//     discount: 20, // optional
//     rating: 4.5,
//     isNew: true, // optional
//     category: {
//       name: "Category Name"
//     }
//   }
