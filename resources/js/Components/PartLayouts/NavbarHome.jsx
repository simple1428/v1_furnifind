import React, { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import TextInput from "@/Components/TextInput";
import { Link, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FaUser } from "react-icons/fa";
import {
  ChevronDownIcon,
  Heart,
  SearchIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import { Button } from "@headlessui/react";
const NavbarHome = ({ categories, isActive, setIsActive, cartTotal }) => {
  const [, setIsSearch] = useState(false);
  const { url, component } = usePage();
  const { auth } = usePage().props;
  return (
    <div
      className="bg-white px-3 lg:px-72 md:px-5 fixed sm:bg-white w-full top-0 py-4 z-10"
      style={{ backdropFilter: "blur(5px)", opacity: 0.9 }}
    >
      <div className="flex justify-between items-center w-full  ">
        <Link href={route("home.index")}>
          <img
            src={`${asset}logo/firstteak2.png`}
            alt="firstteak"
            className="sm:w-32 w-24 "
          />
        </Link>
        <div className="hidden sm:flex justify-evenly items-center cursor-pointer gap-5 p-1 ">
          <div className="flex gap-5 text-sm ">
            <Link
              href={route("home.index")}
              className={component == "Home/Index" ? "font-semibold" : ""}
            >
              Home
            </Link>
            {/* <Link href={route("products.index")}>Products</Link> */}
            <div>
              {/* Dropdown menu */}
              <div className="dropdown dropdown-hover relative  ">
                <div
                  className={url.startsWith("/product") ? "font-semibold" : ""}
                  tabIndex={0}
                  role="button"
                >
                  Products
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52 "
                >
                  <li>
                    <Link
                      href={route("products.index")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      All Products
                    </Link>
                  </li>
                  {categories.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={route("category.show", item.slug)}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <Link
              href={route("category.index")}
              className={url.startsWith("/category") ? "font-semibold" : ""}
            >
              Category
            </Link>
            <Link
              href={route("contact.index")}
              className={url.startsWith("/contact") ? "font-semibold" : ""}
            >
              Contact
            </Link>
          </div>
          {/* <span onClick={() => setIsSearch(!isSearch)}>
                        {isSearch ? <IoClose /> : <IoSearch />}
                    </span> */}
          {auth.user && (
            <Link href={route("order.index")} className="  ">
              Order
            </Link>
          )}
          <Link href={route("cart.index")} className="relative ">
            {(cartTotal && (
              <span className="absolute -top-2 -right-2 h-4 w-4 text-[8px] bg-red-700 text-white rounded-full flex items-center justify-center ">
                {cartTotal}
              </span>
            )) ||
              ""}
            <FiShoppingCart />
          </Link>{" "}
          {auth.user == null ? (
            <Link
              href={route("login")}
              className="idden sm:block bg-gray-800 rounded-md text-white text-xs px-3 py-1.5 "
            >
              Login
            </Link>
          ) : // <Link
          //     href={route("profile.index")}
          //     className="  hidden sm:block"
          // >
          //     <FaUser />
          // </Link>
          null}
        </div>
        <Transition
          show={!isActive}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={"sm:hidden flex items-center gap-2"}
        >
          {/* <span onClick={() => setIsSearch(!isSearch)}>
                        {isSearch ? <IoClose /> : <IoSearch />}
                    </span> */}
          <Link href={route("cart.index")} className="relative ">
            {(cartTotal && (
              <span className="absolute -top-2 -right-2 h-4 w-4 text-[8px] bg-red-700 text-white rounded-full flex items-center justify-center ">
                {cartTotal}
              </span>
            )) ||
              ""}

            <FiShoppingCart />
          </Link>
          {/* {auth.user && (
                        <Link href={route("profile.index")} className="  ">
                            <FaUser />
                        </Link>
                    )} */}

          <button
            onClick={() => setIsActive(!isActive)}
            className="sm:hidden text-xl"
          >
            <BsList />
          </button>
        </Transition>
      </div>
      {isSearch ? (
        <div
          className={`bg-white flex items-center justify-center py-5 duration-300 ease-in transition-all  `}
        >
          <div className="flex items-center justify-center gap-3">
            <TextInput placeholder="Search..." />
            <button className="bg-black p-3 text-xl text-white rounded-lg">
              <IoSearch />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

function Navbar() {
  return (
    <header
      className="bg-white shadow-md mb-2 sticky top-0 z-[999] w-full"
      style={{ backdropFilter: "blur(5px)", opacity: 0.9 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href={route("home")} className="text-3xl font-bold text-gray-800">
          <img src={`${asset}logo/4.png`} alt="firstteak" className="   " />
        </Link>
        <div className="flex items-center gap-4 justify-evenly bg-gray-100 rounded-full px-3 py-2 shadow-md">
          <Link
            className="text-lg bg-white px-3 py-1 rounded-full font-semibold transition-all duration-200 hover:bg-gray-200 hover:shadow-lg"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-lg px-3 py-1 rounded-full font-semibold transition-all duration-200 hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            Catalog
          </Link>
          <Link
            className="text-lg px-3 py-1 rounded-full font-semibold transition-all duration-200 hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            Sale
          </Link>
          <Link
            className="text-lg px-3 py-1 rounded-full font-semibold transition-all duration-200 hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            className="text-gray-700 hover:text-gray-900 border rounded-full p-1"
          >
            <Heart className="w-6 h-6" />
          </Link>
          <Link
            href="/cart"
            className="text-gray-700 hover:text-gray-900 border rounded-full p-1"
          >
            <ShoppingCartIcon className="w-6 h-6" />
          </Link>
          <Link
            href="/cart"
            className="text-gray-700 bg-yellow-400 hover:text-gray-900 border rounded-full p-1"
          >
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
