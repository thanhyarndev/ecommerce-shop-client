import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import type { Product } from "../../app/product/data/product-list";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [first, second] = product.images;
  const isOut = product.status === "Out of Stock";
  return (
    <div className="border p-4 relative group hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-64 w-full overflow-hidden rounded">
        <Image
          src={first}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        <Image
          src={second || first}
          alt={`${product.name} hover`}
          fill
          className="object-cover absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
        {isOut ? (
          <>
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
              HẾT HÀNG
            </span>
          </>
        ) : (
          <span className="absolute top-2 left-2 bg-black text-white text-xs uppercase px-2 py-1">
            {product.status}
          </span>
        )}
      </div>

      <div className="mt-3 flex justify-between items-start">
        <div className="space-y-1">
          <h4 className="font-semibold text-sm line-clamp-2">{product.name}</h4>
          <p className="text-xs text-gray-600">{product.color}</p>
          <p className="font-bold">
            {product.price.toLocaleString("vi-VN")} VND
          </p>
        </div>
        <Heart
          className={`w-5 h-5 cursor-pointer ${
            isOut ? "text-gray-400" : "text-orange-500"
          }`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
