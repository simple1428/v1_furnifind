import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaBookmark,
  FaRegBookmark,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Show({ categories, blog, blogs: relatedPosts }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const tags =
    typeof blog.tags === "string" ? JSON.parse(blog.tags) : blog.tags;

  return (
    <>
      <Head title={blog.title} />
      <AppLayout categories={categories}>
        <article className="max-w-4xl mx-auto px-4 py-12 mt-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{blog.author.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime} min read</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Action Bar */}
          <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-r-lg p-3 space-y-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isLiked ? (
                <FaHeart className="text-red-500 w-5 h-5" />
              ) : (
                <FaRegHeart className="w-5 h-5" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoShareSocialOutline className="w-5 h-5" />
              </button>

              {showShareMenu && (
                <div className="absolute left-12 top-0 bg-white shadow-lg rounded-lg p-3 space-y-2">
                  <button className="flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded">
                    <FaFacebookF className="text-blue-600" /> Facebook
                  </button>
                  <button className="flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded">
                    <FaTwitter className="text-blue-400" /> Twitter
                  </button>
                  <button className="flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded">
                    <FaLinkedinIn className="text-blue-700" /> LinkedIn
                  </button>
                  <button className="flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded">
                    <FaWhatsapp className="text-green-500" /> WhatsApp
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isSaved ? (
                <FaBookmark className="text-yellow-400 w-5 h-5" />
              ) : (
                <FaRegBookmark className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
          </motion.div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-lg">{blog.author.name}</h4>
                <p className="text-gray-600">{blog.author.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{blog.author.bio}</p>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-xl overflow-hidden mb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Comments</h3>
            {/* Add your comments component here */}
            <div className="space-y-6">
              {/* Comment Form */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-4">Leave a Comment</h4>
                <textarea
                  className="w-full p-3 rounded-lg border focus:outline-none focus:border-yellow-400"
                  rows="4"
                  placeholder="Write your comment..."
                ></textarea>
                <button className="mt-3 px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition-colors">
                  Post Comment
                </button>
              </div>

              {/* Existing Comments */}
              {/* Add your comments list here */}
            </div>
          </div>
        </article>
      </AppLayout>
    </>
  );
}
