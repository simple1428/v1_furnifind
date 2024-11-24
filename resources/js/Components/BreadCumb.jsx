import React from "react";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-500 text-[11px] sm:text-sm mb-4   sm:px-0  ">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center  ">
            {index < items.length - 1 ? (
              <Link href={item.url} className="hover:text-gray-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="sm:mx-1">
                <MdKeyboardArrowRight />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
