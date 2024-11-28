import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShoppingCartIcon,
  User,
  Search,
  Menu,
  ChevronDown,
  Bell,
} from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Navbar() {
  const { url, component } = usePage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: "Home", route: route("home") },
    { name: "Catalog", route: route("catalog") },
    {
      name: "Categories",
      subItems: [
        { name: "Living Room", route: "#" },
        { name: "Dining Room", route: "#" },
        { name: "Bedroom", route: "#" },
        { name: "Outdoor", route: "#" },
      ],
    },
    { name: "Sale", route: "#" },
    { name: "Blog", route: route("blog.index") },
  ];

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={route("home")} className="flex-shrink-0">
              <img src={`${asset}logo/4.png`} alt="firstteak" className="h-8" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) =>
                item.subItems ? (
                  <div key={index} className="relative">
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.route}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.route}
                    className={`text-gray-700 hover:text-gray-900 ${
                      url === item.route ? "font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/wishlist"
                className="p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100"
              >
                <Heart className="w-5 h-5" />
              </Link>

              <Link
                href="/cart"
                className="p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100 relative"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Link>

              <Link
                href="/profile"
                className="p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100"
              >
                <User className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.route}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20"
          >
            <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl">
              <div className="p-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 px-4 py-2 focus:outline-none"
                  />
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
