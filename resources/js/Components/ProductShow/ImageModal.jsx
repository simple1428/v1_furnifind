import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ImageModal({
  isOpen,
  setIsOpen,
  images,
  selectedImage,
  productName,
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <button
        className="absolute top-4 right-4 text-white"
        onClick={() => setIsOpen(false)}
      >
        <IoClose className="w-8 h-8" />
      </button>
      <img
        src={images[selectedImage]}
        alt={productName}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />
    </motion.div>
  );
}
