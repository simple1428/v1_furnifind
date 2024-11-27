import React from "react";
import { IoCart } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useForm } from "@inertiajs/react";

export default function ProductInfo({ product }) {
  const { data, setData } = useForm({ quantity: 1 });
  const price = parseFloat(product.price);
  const discountedPrice = price * 0.8; // 20% discount
  return (
    <div className="space-y-6">
      {/* Category & Title */}
      <div>
        <span className="text-sm font-medium text-blue-600">
          {product.category.name}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          {product.name}
        </h1>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-4">
        <span className="text-3xl font-bold text-gray-900">
          <FormatRupiah value={discountedPrice} />
        </span>
        <span className="text-xl text-gray-500 line-through">
          <FormatRupiah value={price} />
        </span>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
        {[
          { label: "In Stock", value: "Available" },
          { label: "Shipping", value: "2-3 days" },
          { label: "Reviews", value: "4.8/5" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="font-medium">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Product Specifications */}
      <div className="space-y-4">
        {product.dimensions && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Dimensions</span>
            <span className="font-medium">{product.dimensions}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Material</span>
          <span className="font-medium">{product.material}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
            <button
              onClick={() =>
                setData("quantity", Math.max(1, data.quantity - 1))
              }
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              -
            </button>
            <span className="w-12 text-center font-medium">
              {data.quantity}
            </span>
            <button
              onClick={() => setData("quantity", data.quantity + 1)}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              // Implement your add to cart logic here
              alert("Added to cart!");
            }}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <IoCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={`https://wa.me/6289625709200?text=${encodeURIComponent(
              `I'm interested in ${product.name}`
            )}`}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:info@example.com?subject=Inquiry about ${product.name}`}
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <IoMail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
