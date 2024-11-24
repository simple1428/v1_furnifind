// resources/js/Layouts/AppLayout.jsx
import React from "react";
import { Head, Link } from "@inertiajs/react";

import { Button } from "@headlessui/react";
import FooterHome from "../Components/PartLayouts/FooterHome";
import Navbar from "../Components/PartLayouts/NavbarHome";

const AppLayout = ({ children, categories }) => {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <div>
        <Head title="Furniture" />
        <Navbar />
        <main>{children}</main>
      </div>
      <FooterHome categories={categories} />
    </section>
  );
};

export default AppLayout;
