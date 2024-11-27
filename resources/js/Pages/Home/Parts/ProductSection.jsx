import { motion } from "framer-motion";
import { IoCart } from "react-icons/io5";
import { fadeInUp, staggerContainer } from "../Utils/MotionVariants";

const ProductSection = ({ products }) => {
  return (
    <motion.section variants={fadeInUp} className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Latest Arrivals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Discover our newest collection of modern furniture pieces
          </p>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`group ${
                index === 0 || index === 4 ? "md:col-span-2" : ""
              } bg-white rounded-3xl overflow-hidden shadow-sm`}
            >
              <motion.div className="bg-white rounded-3xl overflow-hidden shadow-sm h-[500px] flex flex-col">
                <div className="relative overflow-hidden h-[300px]">
                  {/* Tinggi gambar ditambah */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  {/* Gradient overlay */}
                  <img
                    src={
                      product.imageUrl ||
                      "https://firstteak.com/storage/product/product1714642708_1.jpg"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-all duration-700 ease-in-out"
                  />
                  {/* Quick view button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-gray-800 font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                  {/* Discount badge */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                        <span className="text-lg">-{product.discount}%</span>
                        <span className="text-xs uppercase">OFF</span>
                      </div>
                    </div>
                  )}
                  {/* Wishlist button */}
                  <button className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                        New Arrival
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                        In Stock
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-blue-600">
                        ${product.price}
                      </p>
                      {product.oldPrice && (
                        <p className="text-gray-400 line-through text-sm">
                          ${product.oldPrice}
                        </p>
                      )}
                    </div>
                    <button className="bg-blue-600 hover:bg-yellow-400 text-white px-5 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      <IoCart className="w-5 h-5" />
                      <span className="font-medium">Add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductSection;
