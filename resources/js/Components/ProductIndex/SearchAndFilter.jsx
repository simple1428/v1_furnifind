import React from "react";
import {
  IoSearch,
  IoFilterOutline,
  IoGridOutline,
  IoListOutline,
} from "react-icons/io5";

export default function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  sortBy,
  handleSort,
  viewMode,
  setViewMode,
  isFilterOpen,
  setIsFilterOpen,
  handleSearch,
  displayProducts,
  totalProducts,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
          />
          <IoSearch
            onClick={handleSearch}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          />
        </div>

        {/* Controls */}
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
        Showing {displayProducts.length} of {totalProducts} products
      </div>
    </div>
  );
}
