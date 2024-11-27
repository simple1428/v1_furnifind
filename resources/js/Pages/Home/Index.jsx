// resources/js/Pages/Home/Index.jsx
import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import HeroSection from "./Parts/HeroSection";
import NewsletterSection from "./Parts/NewsletterSection";
import ScrollProgress from "./Utils/ScrollProgress";
import CategorySection from "./Parts/CategorySection";
import ProductSection from "./Parts/ProductSection";
import ReviewSection from "./Parts/ReviewSection";
import { Head } from "@inertiajs/react";
const Home = ({ products, categories }) => {
  return (
    <>
      <Head title="HomePage " />
      <AppLayout categories={categories}>
        <ScrollProgress />
        <HeroSection />
        <CategorySection categories={categories} />
        <ProductSection products={products} />
        <ReviewSection />
        <NewsletterSection />
      </AppLayout>
    </>
  );
};

export default Home;
