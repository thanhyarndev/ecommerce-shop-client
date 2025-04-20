"use client";

import Image from "next/image";

const productItems = [
  {
    image: "/images/products/our-product-1.jpg",
    title: "Elegant Handbag",
    subtitle: "Premium Leather",
  },
  {
    image: "/images/products/our-product-2.jpg",
    title: "Stylish Cap",
    subtitle: "Streetwear Essential",
  },
  {
    image: "/images/products/our-product-3.jpg",
    title: "Denim Jeans",
    subtitle: "Everyday Comfort",
  },
  {
    image: "/images/products/our-product-4.jpg",
    title: "Modern Tee",
    subtitle: "Casual Fit",
  },
];

export default function OurProducts() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT - Text content */}
        <div className="flex items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Our Products
            </h2>
            <p className="text-gray-600 text-[18px] leading-relaxed">
              Discover the finest picks in fashion that combine comfort, trend,
              and uniqueness. We ensure top-notch quality and style with each
              product you find here.
            </p>
            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
              “Explore our curated collections tailored to elevate your style.”
            </blockquote>
            <p className="text-gray-600 text-[18px] leading-relaxed">
              With hundreds of items across categories, we help you find exactly
              what you’re looking for – with premium quality and a modern look.
            </p>
            <button className="mt-4 border px-6 py-2 text-sm hover:bg-gray-100 transition">
              Discover More
            </button>
          </div>
        </div>

        {/* RIGHT - 4 product boxes */}
        <div className="grid grid-cols-2 gap-4">
          {productItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm italic">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
