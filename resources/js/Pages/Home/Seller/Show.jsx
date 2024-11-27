import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import AppLayout from "../../../Layouts/AppLayout";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";

import { IoGrid, IoList, IoFilter } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Catalog/Parts/ProductCard";
export default function Show({ seller, categories }) {
  const [selectedView, setSelectedView] = useState("grid");
  const [selectedFilter, setSelectedFilter] = useState("all");
  console.log(seller);
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    customPaging: (i) => (
      <div className="w-2 h-2 mx-1 rounded-full bg-white/50 hover:bg-white/80" />
    ),
  };
  const bannerData = [
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      title: "Summer Sale",
      subtitle: "Up to 50% Off",
      description: "Get amazing deals on premium furniture",
      buttonText: "Shop Now",
    },
    {
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      title: "New Collection",
      subtitle: "Modern Living",
      description: "Discover our latest furniture collection",
      buttonText: "Explore",
    },
    {
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
      title: "Special Offer",
      subtitle: "Limited Time",
      description: "Free shipping on orders over $500",
      buttonText: "Learn More",
    },
  ];

  const storeStats = [
    { label: "Products", value: "1.2K+" },
    { label: "Reviews", value: "4.8/5" },
    { label: "Followers", value: "50K+" },
    { label: "Response", value: "≤ 24h" },
  ];

  return (
    <>
      <Head title={`Furnifind - ${seller.store_name}`} />
      <AppLayout categories={categories}>
        <div className="mt-20">
          {/* Store Header Banner */}
          <div className="relative h-[300px]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1"
                alt="Store Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>

          {/* Store Info Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="relative">
                  <img
                    src={seller.logo || "https://via.placeholder.com/150"}
                    alt={seller.store_name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {seller.store_name}
                    </h1>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      Official Store
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    {seller.description || "Premium Furniture Store"}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {storeStats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="font-medium text-gray-900">
                          {stat.value}
                        </span>
                        <span className="text-gray-500">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Follow Store
                  </button>
                  <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
              <Slider {...bannerSettings} className="store-banner-slider">
                {bannerData.map((banner, index) => (
                  <div key={index} className="outline-none">
                    <div className="relative h-[300px] rounded-2xl overflow-hidden">
                      {/* Banner Image */}
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 flex items-center">
                        <div className="ml-8 md:ml-16 max-w-xl">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="inline-block px-4 py-1 bg-yellow-400 text-yellow-900 text-sm font-medium rounded-full mb-4">
                              {banner.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                              {banner.title}
                            </h2>
                            <p className="text-white/90 text-lg mb-6">
                              {banner.description}
                            </p>
                            <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300">
                              {banner.buttonText}
                            </button>
                          </motion.div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 right-0 w-1/3 h-full">
                        <div className="relative w-full h-full">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-0 right-0 w-full h-full"
                          >
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Store Navigation */}
            <Tab.Group>
              <div className="mt-8 flex items-center justify-between">
                <Tab.List className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                  <Tab
                    className={({ selected }) =>
                      `px-4 py-2 rounded-lg ${
                        selected
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`
                    }
                  >
                    All Products
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `px-4 py-2 rounded-lg ${
                        selected
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`
                    }
                  >
                    Categories
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `px-4 py-2 rounded-lg ${
                        selected
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`
                    }
                  >
                    Reviews
                  </Tab>
                </Tab.List>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setSelectedView("grid")}
                      className={`p-2 rounded-lg ${
                        selectedView === "grid"
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      <IoGrid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setSelectedView("list")}
                      className={`p-2 rounded-lg ${
                        selectedView === "list"
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      <IoList className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <IoFilter className="w-5 h-5" />
                    Filter
                  </button>
                </div>
              </div>

              <Tab.Panels className="mt-8">
                <Tab.Panel>
                  {/* Products Grid */}
                  <div
                    className={`grid ${
                      selectedView === "grid"
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        : "grid-cols-1"
                    } gap-6`}
                  >
                    {seller.products.map((product, i) => {
                      return (
                        <motion.div key={i} whileHover={{ y: -5 }}>
                          <ProductCard product={product} />;
                        </motion.div>
                      );
                    })}
                  </div>
                </Tab.Panel>

                <Tab.Panel>
                  {/* Categories Content */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Category Cards */}
                  </div>
                </Tab.Panel>

                <Tab.Panel>
                  {/* Reviews Content */}
                  <div className="space-y-6">{/* Review Cards */}</div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
