import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
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
  );
}
