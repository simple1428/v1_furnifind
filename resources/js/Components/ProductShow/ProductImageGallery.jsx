import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoHeart } from "react-icons/io5";

export default function ProductImageGallery({ productName }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const images = [
    "https://firstteak.com/storage/product/product1714642708_1.jpg",
    "https://firstteak.com/storage/product/product1714643954_4.jpg",
    "https://firstteak.com/storage/product/product1714643954_2.jpg",
  ];
  return (
    <div className="relative">
      {/* Main Image */}
      <motion.div
        className="aspect-square overflow-hidden rounded-2xl bg-gray-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={images[selectedImage]}
          alt={productName}
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
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Image Modal */}
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
            Close
          </button>
          <img
            src={images[selectedImage]}
            alt={productName}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </motion.div>
      )}
    </div>
  );
}
