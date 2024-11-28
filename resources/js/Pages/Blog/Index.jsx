import { Head, Link } from "@inertiajs/react";
import React from "react";
import { motion } from "framer-motion";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ categories, blogs: blogPosts }) {
  // Data blog dummy

  return (
    <>
      <Head title="Furnifind Blog" />
      <AppLayout categories={categories}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Furnifind Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the latest trends, tips, and insights about furniture and
              interior design.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                alt="Featured post"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <span className="text-yellow-400 text-sm font-semibold">
                  FEATURED POST
                </span>
                <h2 className="text-3xl font-bold text-white mt-2">
                  Creating the Perfect Living Room Setup
                </h2>
                <p className="text-white/80 mt-2 mb-4">
                  Expert tips on furniture arrangement and style coordination
                </p>
                <Link
                  href="#"
                  className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Blog Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {["All", "Interior Design", "DIY", "Sustainability", "Trends"].map(
              (category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="px-6 py-2 rounded-full border border-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                >
                  {category}
                </motion.button>
              )
            )}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <Link
                      href={route("blog.show", post.id)}
                      className="text-yellow-400 hover:text-yellow-500 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gray-100 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest articles and design inspiration delivered to your
              inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-400"
              />
              <button className="px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </AppLayout>
    </>
  );
}
