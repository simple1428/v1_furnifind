import { Link } from "@inertiajs/react";

const StoreSection = ({ product, asset }) => {
  const seller = product.seller;
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
                alt={seller.store_name}
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
            <Link
              href={route("seller.show", seller.id)}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
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
            </Link>
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

export default StoreSection;
