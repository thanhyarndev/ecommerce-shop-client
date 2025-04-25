// components/product/ProductInfo.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductAccordion from "@/components/product/ProductAccordion";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  description: string;
  colors: string[];
  sizes: string[];
}

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold uppercase leading-snug">{product.name}</h1>
      <p className="text-sm">Mã sản phẩm: <span className="font-medium">{product.sku}</span></p>
      <p className="text-red-500 font-semibold text-lg">{product.price.toLocaleString()} VND</p>
      <p className="text-sm text-gray-700 leading-relaxed border-t pt-4">{product.description}</p>

      <div className="flex gap-2 mt-4">
        {product.colors.map((color, idx) => (
          <div
            key={idx}
            className="w-6 h-6 border rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Size</label>
          <select className="border rounded px-3 py-1">
            {product.sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Số lượng</label>
          <Input type="number" min={1} defaultValue={1} className="w-24" />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button className="w-full bg-black text-white">THÊM VÀO GIỎ HÀNG</Button>
        <Button variant="outline" className="w-12">❤️</Button>
      </div>

      <Button className="w-full mt-4 bg-orange-600 text-white">THANH TOÁN</Button>
      <ProductAccordion />
    </div>
  );
}
