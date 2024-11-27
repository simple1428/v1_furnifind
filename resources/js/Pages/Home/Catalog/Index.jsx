import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import SearchAndFilter from "@/Components/ProductIndex/SearchAndFilter";
import ProductGrid from "@/Components/ProductIndex/ProductGrid";
import Pagination from "@/Components/ProductIndex/Pagination";
import Breadcrumb from "@/Components/BreadCumb";

export default function Index({ categories, products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [product, setProduct] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
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

  // Pagination calculation
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
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            handleSort={handleSort}
            viewMode={viewMode}
            setViewMode={setViewMode}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            handleSearch={handleSearch}
            displayProducts={displayProducts}
            totalProducts={products.length}
          />

          <ProductGrid
            displayProducts={displayProducts}
            viewMode={viewMode}
            handleReset={handleReset}
          />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </AppLayout>
    </>
  );
}
