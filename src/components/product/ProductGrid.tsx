import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../app/product/data/product-list";

const ProductGrid: React.FC = () => (
  <div className="grid grid-cols-3 gap-6">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);

export default ProductGrid;
