import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import ProductCard from "../../Pages/Home/Catalog/Parts/ProductCard";

export default function ProductGrid({
  displayProducts,
  viewMode,
  handleReset,
}) {
  return (
    <AnimatePresence>
      {displayProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center h-60 text-gray-500"
        >
          <IoSearch className="w-12 h-12 mb-4 text-gray-300" />
          <p className="text-lg">No products found</p>
          <button
            onClick={handleReset}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            Reset filters
          </button>
        </motion.div>
      ) : (
        <motion.div
          layout
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          } gap-6`}
        >
          {displayProducts.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={item} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
