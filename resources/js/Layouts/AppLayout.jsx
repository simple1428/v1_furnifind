// resources/js/Layouts/AppLayout.jsx
import React from "react";
import { Head, Link } from "@inertiajs/react";

import { Button } from "@headlessui/react";
import FooterHome from "../Components/PartLayouts/FooterHome";
import Navbar from "../Components/PartLayouts/NavbarHome";

const AppLayout = ({ children, categories }) => {
  return (
    <div>
      <Head title="Furniture" />
      <Navbar />
      <main>{children}</main>
      <FooterHome categories={categories} />
    </div>
  );
};

export default AppLayout;
