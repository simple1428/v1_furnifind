import ProductCard from "./Parts/ProductCard";
import React, { useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import { FormatRupiah } from "@arismun/format-rupiah";
import { motion, AnimatePresence } from "framer-motion";
import { IoCart, IoMail, IoClose, IoHeart } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import AppLayout from "../../../Layouts/AppLayout";
import Breadcrumb from "@/Components/BreadCumb";
export default function Show({ categories, products, product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Product", url: route("catalog") },
    {
      label: product.name.split(" ").slice(0, 3).join(" "),
    },
  ];
  const { data, setData } = useForm({ quantity: 1 });
  const images = [
    "https://firstteak.com/storage/product/product1714642708_1.jpg",
    "https://firstteak.com/storage/product/product1714643954_4.jpg",
    "https://firstteak.com/storage/product/product1714643954_2.jpg",
  ];

  const price = parseFloat(product.price);
  const discountedPrice = price * 0.8; // 20% discount

  const ProductImageGallery = () => (
    <div className="relative ">
      {/* Main Image */}
      <motion.div
        className="aspect-square overflow-hidden rounded-2xl bg-gray-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-cover cursor-zoom-in"
          onClick={() => setImageModalOpen(true)}
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          -20% OFF
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300">
          <IoHeart className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-2 mt-4">
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            className={`aspect-square rounded-lg overflow-hidden ${
              selectedImage === idx ? "ring-2 ring-blue-500" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(idx)}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  );

  const ProductInfo = () => (
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

      {/* Quantity Selector & Actions */}
      {/* Actions Section */}
      <div className="space-y-4">
        {/* Quantity Selector */}
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

  return (
    <AppLayout categories={categories}>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-20">
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid md:grid-cols-2 gap-12">
          <ProductImageGallery />
          <div>
            <ProductInfo />
            <SocialShare />
          </div>
        </div>
        <StoreSection product={product} asset={asset} />
        {/* Description */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <motion.div
            className={`prose max-w-none ${
              !isDescriptionExpanded ? "max-h-64 overflow-hidden" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          {product.description.length > 300 && (
            <button
              onClick={() => setDescriptionExpanded(!isDescriptionExpanded)}
              className="mt-4 text-blue-500 hover:text-blue-600"
            >
              {isDescriptionExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>{" "}
        <ProductFeatures />
        {/* <SizeGuide /> */}
        <ReviewsSection />
        <FAQSection />
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setImageModalOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setImageModalOpen(false)}
            >
              <IoClose className="w-8 h-8" />
            </button>
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AppLayout>
  );
}
const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Great quality product!",
      date: "2024-01-15",
    },
    // ... more reviews
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">{review.user}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-${
                      i < review.rating ? "yellow" : "gray"
                    }-400`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const ProductFeatures = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Quality Guarantee",
      description: "100% authentic materials",
    },
    { icon: "🚚", title: "Free Shipping", description: "On orders over $500" },
    { icon: "↩️", title: "Easy Returns", description: "30-day return policy" },
    {
      icon: "🔧",
      title: "Installation",
      description: "Professional installation available",
    },
  ];

  return (
    <div className="mt-16 bg-gray-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Why Choose Our Product
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center">
            <span className="text-3xl mb-4 block">{feature.icon}</span>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const SizeGuide = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Size Guide</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">Dimension</th>
              <th className="px-4 py-3">Width</th>
              <th className="px-4 py-3">Height</th>
              <th className="px-4 py-3">Depth</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3">Product</td>
              <td className="px-4 py-3">{product.width}cm</td>
              <td className="px-4 py-3">{product.height}cm</td>
              <td className="px-4 py-3">{product.depth}cm</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Package</td>
              <td className="px-4 py-3">{product.package_width}cm</td>
              <td className="px-4 py-3">{product.package_height}cm</td>
              <td className="px-4 py-3">{product.package_depth}cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
const FAQSection = () => {
  const faqs = [
    {
      question: "What's the delivery time?",
      answer: "Standard delivery takes 2-3 business days within the city.",
    },
    {
      question: "Do you offer assembly service?",
      answer:
        "Yes, we offer professional assembly service for an additional fee.",
    },
    // ... more FAQs
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group bg-white rounded-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer">
              <h3 className="font-medium">{faq.question}</h3>
              <span className="transform group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};
const SocialShare = () => {
  const shareLinks = [
    { platform: "Facebook", icon: "fb-icon", color: "blue" },
    { platform: "Twitter", icon: "twitter-icon", color: "sky" },
    { platform: "Pinterest", icon: "pinterest-icon", color: "red" },
    { platform: "Email", icon: "email-icon", color: "gray" },
  ];

  return (
    <div className="mt-8 flex items-center gap-4">
      <span className="text-sm text-gray-500">Share this product:</span>
      <div className="flex gap-2">
        {shareLinks.map((link, idx) => (
          <button
            key={idx}
            className={`p-2 rounded-full bg-${link.color}-100 hover:bg-${link.color}-200 transition-colors`}
          >
            {/* Add your social media icons here */}
            {link.platform}
          </button>
        ))}
      </div>
    </div>
  );
};
const StoreSection = ({ product, asset }) => {
  const seller = product.seller;
  console.log(seller);
  const storeStats = [
    { label: "Products", value: seller.products.length },
    { label: "Reviews", value: "4.8/5" },
    { label: "Response", value: "≤ 24h" },
    { label: "Joined", value: "2022" },
  ];

  return (
    <div className="mt-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Store Info */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="relative">
              <img
                src={`${asset}logo/2.png`}
                alt={product.seller.store_name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover bg-white shadow-sm border border-gray-100"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {product.seller.store_name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Official Store
                </span>
                <span className="text-sm text-gray-500">
                  ⭐ 4.8 (2.1k reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Store Stats */}
          <div className="flex-grow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {storeStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              Follow Store
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Visit Store
            </button>
          </div>
        </div>

        {/* Store Highlights */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="p-2 bg-green-100 rounded-full">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-green-900">Verified Seller</p>
              <p className="text-sm text-green-700">100% Authentic Products</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
            <div className="p-2 bg-blue-100 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-blue-900">Fast Response</p>
              <p className="text-sm text-blue-700">Average reply in 24h</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
            <div className="p-2 bg-purple-100 rounded-full">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-purple-900">Secure Shipping</p>
              <p className="text-sm text-purple-700">Free for orders $500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
