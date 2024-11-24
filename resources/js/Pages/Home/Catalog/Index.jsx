import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import AppLayout from "../../../Layouts/AppLayout";
import Breadcrumb from "@/Components/BreadCumb";
import {
  IoSearch,
  IoFilterOutline,
  IoGridOutline,
  IoListOutline,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import TextInput from "@/Components/TextInput";
import ProductCard from "./Parts/ProductCard";

export default function Index({ categories, products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [product, setProduct] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 24;

  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "All Products", url: route("home") },
  ];

  // Filter and Sort Functions
  const handleSort = (sortType) => {
    let sortedProducts = [...product];
    switch (sortType) {
      case "lowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = products.slice();
    }
    setSortBy(sortType);
    setProduct(sortedProducts);
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProduct(filtered);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setProduct(products);
    setSearchTerm("");
    setSortBy("");
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(product.length / itemsPerPage);
  const displayProducts = product.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Head title="Catalog Products" />
      <AppLayout categories={categories}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Left Side - Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                />
                <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              {/* Right Side - Controls */}
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => handleSort(e.target.value)}
                    className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 pr-8 focus:outline-none focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="default">Sort By</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                  </select>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <IoGridOutline className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <IoListOutline className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter Button */}
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <IoFilterOutline className="w-5 h-5" />
                  <span className="hidden md:inline">Filters</span>
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {displayProducts.length} of {products.length} products
            </div>
          </div>

          {/* Products Grid */}
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
                {displayProducts.map((item, index) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </AppLayout>
    </>
  );
}
