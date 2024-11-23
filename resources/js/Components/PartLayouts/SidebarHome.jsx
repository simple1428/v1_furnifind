import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { BsList, BsListNested } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose, IoLogIn, IoLogOut, IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function SidebarHome({ isActive, setIsActive, categories }) {
    const [isShow, setIsShow] = useState(false);
    const { url, component } = usePage();
    const { auth } = usePage().props;
    return (
        <Transition
            show={isActive}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className={
                "z-[999] sm:hidden    fixed bg-white shadow-xl  left-0 w-3/4 h-screen py-4 px-3"
            }
        >
            <div className=" flex justify-between flex-col h-screen ">
                <div className="">
                    <div className="uppercase text-xl font-bold tracking-wider flex justify-between items-center relative border-b pb-2">
                        <Link href={route("home.index")}>
                            <img
                                src={`${asset}logo/firstteak2.png`}
                                alt="firstteak"
                                className="sm:w-32 w-24 "
                            />
                        </Link>
                        <span
                            className="  text-xl   text-black"
                            onClick={() => setIsActive(!isActive)}
                        >
                            <BsListNested />
                        </span>
                    </div>
                    {/* {isShow ? (
                        <div
                            className={`  flex items-center justify-center  pt-1 duration-300 ease-in transition-all w-full   `}
                        >
                            <div className="flex items-center justify-center gap-3">
                                <TextInput
                                    placeholder="Search..."
                                    className="w-full py-0.5 placeholder:text-xs"
                                />
                                <button className="bg-black p-2 text-sm text-white rounded-lg">
                                    <IoSearch />
                                </button>
                            </div>
                        </div>
                    ) : null} */}
                    <div className="flex gap-4 text-sm flex-col justify-evenly mt-8">
                        <Link
                            href={route("home.index")}
                            className={
                                component == "Home/Index"
                                    ? "font-semibold   bg-gray-900 text-white rounded-sm px-2 py-1"
                                    : "rounded-sm bg-gray-100 px-2 py-1"
                            }
                        >
                            Home
                        </Link>

                        <div>
                            <button
                                onClick={() => setIsShow(!isShow)}
                                className={
                                    url.startsWith("/product")
                                        ? "font-semibold   bg-gray-900 text-white rounded-sm px-2 py-1"
                                        : "rounded-sm bg-gray-100 px-2 flex justify-between items-center w-full py-1"
                                }
                            >
                                <span>Product</span>
                                <span>
                                    {isShow ? (
                                        <MdKeyboardArrowUp />
                                    ) : (
                                        <MdKeyboardArrowDown />
                                    )}
                                </span>
                            </button>
                            <div className={"overflow-hidden"}>
                                <Transition
                                    show={isShow}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="-translate-y-full"
                                    enterTo="translate-y-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-y-0"
                                    leaveTo="-translate-y-full"
                                >
                                    <ul className=" border  my-1 rounded-sm space-y-2">
                                        <li>
                                            <Link
                                                href={route("products.index")}
                                                className="block px-4 py-2 bg-gray-50 rounded-md"
                                            >
                                                All Products
                                            </Link>
                                        </li>
                                        {categories
                                            .slice(0, 5)
                                            .map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link
                                                            href={route(
                                                                "category.show",
                                                                item.slug
                                                            )}
                                                            className="block px-4 py-2 bg-gray-50 rounded-md"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        <li className=" border-t">
                                            {" "}
                                            <Link
                                                href={route("category.index")}
                                                className="block px-4 py-2 bg-gray-50 rounded-md"
                                            >
                                                More
                                            </Link>
                                        </li>
                                    </ul>
                                </Transition>
                            </div>
                        </div>

                        <Link
                            href={route("category.index")}
                            className={
                                url.startsWith("/category")
                                    ? "font-semibold   bg-gray-900 text-white rounded-sm px-2 py-1"
                                    : "rounded-sm bg-gray-100 px-2 duration-300 transition-transform py-1"
                            }
                        >
                            Category
                        </Link>
                        <Link
                            href={route("contact.index")}
                            className={
                                url.startsWith("/contact")
                                    ? "font-semibold   bg-gray-900 text-white rounded-sm px-2 py-1"
                                    : "rounded-sm bg-gray-100 px-2 duration-300 transition-transform py-1"
                            }
                        >
                            Contact
                        </Link>
                        <hr />
                        {auth.user && (
                            <div className="flex flex-col gap-2">
                                <Link
                                    href={route("cart.index")}
                                    className={
                                        url.startsWith("/contact")
                                            ? "font-semibold   bg-gray-900 text-white rounded-sm px-2 py-1"
                                            : "rounded-sm bg-gray-100 px-2 duration-300 transition-transform py-1"
                                    }
                                >
                                    Cart
                                </Link>
                                <Link
                                    href={route("order.index")}
                                    className={
                                        url.startsWith("/contact")
                                            ? "font-semibold   bg-gray-900 text-white rounded-sm px-2 py-1"
                                            : "rounded-sm bg-gray-100 px-2 duration-300 transition-transform py-1"
                                    }
                                >
                                    Order
                                </Link>
                                <Link
                                    href={route("profile.index")}
                                    className={
                                        url.startsWith("/contact")
                                            ? "font-semibold   bg-gray-900 text-white rounded-sm px-2 py-1"
                                            : "rounded-sm bg-gray-100 px-2 duration-300 transition-transform py-1"
                                    }
                                >
                                    Profile
                                </Link>
                            </div>
                        )}
                    </div>{" "}
                </div>
                {!auth.user ? (
                    <Link
                        href={route("login")}
                        className="bg-gray-100 rounded-sm  uppercase font-semibold mb-5 flex items-center justify-center py-2 text-xs"
                    >
                        <IoLogIn size={20} /> Login
                    </Link>
                ) : (
                    <Link
                        method="post"
                        href={route("logout")}
                        as="button"
                        className="bg-gray-100 rounded-sm  uppercase font-semibold mb-5 flex items-center justify-center py-2 text-xs"
                    >
                        <IoLogOut size={20} /> Logout
                    </Link>
                )}
            </div>
        </Transition>
    );
}
