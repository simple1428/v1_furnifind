import React from "react";
import ProductCard from "../../Pages/Home/Catalog/Parts/ProductCard";

export default function RelatedProducts({ products, currentProductId }) {
  const filteredProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((relatedProduct) => (
          <ProductCard key={relatedProduct.id} product={relatedProduct} />
        ))}
      </div>
    </div>
  );
}
