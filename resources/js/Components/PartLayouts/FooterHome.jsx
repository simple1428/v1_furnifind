// components/Footer.js

import { Link } from "@inertiajs/react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const FooterHome = ({ categories }) => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-4 grid-cols-1 gap-8 py-10 px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src={`${asset}logo/3.png`}
            alt="Logo"
            className="rounded-full w-28 mb-4 transition-transform duration-300 hover:scale-110"
          />
          <p className="text-center sm:text-left text-sm text-gray-500">
            Your trusted furniture partner for quality and style.
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-3">Categories</h4>
          <ul className="space-y-2">
            {categories.slice(0, 6).map((item, index) => (
              <li
                key={index}
                className="text-sm hover:text-white transition-colors duration-200"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-3">About Us</h4>
          <ul className="space-y-2">
            <li className="text-sm hover:text-white transition-colors duration-200">
              <Link href={route("home")}>Contact Us</Link>
            </li>
            <li className="text-sm hover:text-white transition-colors duration-200">
              Blog
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li className="text-sm">Address: 123 Main Street</li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              <span>Whatsapp: +123 456 789</span>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineEmail className="text-red-500" />
              <span>Email: info@example.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="border-t border-gray-700 py-4">
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterHome;
