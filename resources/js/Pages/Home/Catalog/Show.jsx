import React, { useState } from "react";
import ProductImageGallery from "@/Components/ProductShow/ProductImageGallery";
import ProductInfo from "@/Components/ProductShow/ProductInfo";
import AppLayout from "@/Layouts/AppLayout";
import Breadcrumb from "@/Components/BreadCumb";
import StoreSection from "@/Components/ProductShow/StoreSection";
import SocialShare from "@/Components/ProductShow/SocialShare";
import FAQSection from "@/Components/ProductShow/FAQSection";
import ProductFeatures from "@/Components/ProductShow/ProductFeatures";
import ReviewsSection from "@/Components/ProductShow/ReviewsSection";
import ProductDescription from "@/Components/ProductShow/ProductDescription";
import RelatedProducts from "@/Components/ProductShow/RelatedProducts";
import ImageModal from "@/Components/ProductShow/ImageModal";

export default function Show({ categories, products, product }) {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage] = useState(0);
  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Product", url: route("catalog") },
    { label: product.name.split(" ").slice(0, 3).join(" ") },
  ];

  return (
    <AppLayout categories={categories}>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-20">
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid md:grid-cols-2 gap-12">
          <ProductImageGallery productName={product.name} />
          <div>
            <ProductInfo product={product} />
            <SocialShare />
          </div>
        </div>
        <StoreSection product={product} />
        <ProductDescription description={product.description} />
        <ProductFeatures />
        <ReviewsSection />
        <FAQSection />
        <RelatedProducts products={products} currentProductId={product.id} />
      </div>
      <ImageModal
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
        images={product.images}
        selectedImage={selectedImage}
        productName={product.name}
      />
    </AppLayout>
  );
}
