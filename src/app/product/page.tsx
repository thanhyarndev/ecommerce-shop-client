import React from "react";
import Sidebar from "../../components/product/Sidebar";
import ProductGrid from "../../components/product/ProductGrid";

const ProductPage: React.FC = () => (
  <div className="flex max-w-[1200px] mx-auto">
    {/* Sidebar lọc */}
    <aside className="w-1/4 border-r">
      <Sidebar />
    </aside>

    {/* Grid sản phẩm */}
    <main className="w-3/4 p-6">
      <ProductGrid />
    </main>
  </div>
);

export default ProductPage;
