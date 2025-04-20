"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";

interface Product {
  title: string;
  price: number;
  image: string;
  rating?: number;
}

const productsData: Record<string, Product[]> = {
  men: [
    { title: "Air Force 1 X", price: 90, image: "/images/products/men-1.jpg" },
    { title: "Love Nana ‘20", price: 150, image: "/images/products/men-2.jpg" },
    {
      title: "Classic Spring",
      price: 120,
      image: "/images/products/men-3.jpg",
    },
    { title: "Urban Jacket", price: 180, image: "/images/products/men-4.jpg" },
    {
      title: "Sporty Sneakers",
      price: 110,
      image: "/images/products/men-5.jpg",
    },
  ],
  women: [
    {
      title: "Elegant Dress",
      price: 110,
      image: "/images/products/women-1.jpg",
    },
    { title: "Summer Vibe", price: 95, image: "/images/products/women-2.jpg" },
    { title: "Chic Look", price: 135, image: "/images/products/women-3.jpg" },
    {
      title: "Evening Glam",
      price: 200,
      image: "/images/products/women-4.jpg",
    },
    { title: "Boho Blouse", price: 85, image: "/images/products/women-5.jpg" },
  ],
  kids: [
    { title: "Playful Tee", price: 40, image: "/images/products/kid-1.jpg" },
    { title: "Mini Explorer", price: 60, image: "/images/products/kid-2.jpg" },
    { title: "Cute Hoodie", price: 55, image: "/images/products/kid-3.jpg" },
    { title: "Fun Jumper", price: 70, image: "/images/products/kid-4.jpg" },
    {
      title: "Adventure Pants",
      price: 50,
      image: "/images/products/kid-5.jpg",
    },
  ],
};

export default function ProductCarousel({
  title,
  category,
}: {
  title: string;
  category: keyof typeof productsData;
}) {
  const originalProducts = productsData[category];
  const itemWidth = 300;
  const gap = 24;
  const visibleItems = 3;
  const totalWidth = itemWidth + gap;

  // Clone first 3 + last 3 for infinite illusion
  const products = [
    ...originalProducts.slice(-visibleItems),
    ...originalProducts,
    ...originalProducts.slice(0, visibleItems),
  ];

  const [index, setIndex] = useState(visibleItems);
  const [transition, setTransition] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToIndex = (i: number) => {
    setIndex(i);
    setTransition(true);
  };

  const slideRight = () => {
    goToIndex(index + 1);
  };

  const slideLeft = () => {
    goToIndex(index - 1);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 3000);
    return () => clearInterval(interval);
  });

  // Loop effect
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === products.length - visibleItems) {
        // Jump to original start without transition
        setTransition(false);
        setIndex(visibleItems);
      }
      if (index === 0) {
        setTransition(false);
        setIndex(originalProducts.length);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("transitionend", handleTransitionEnd);
    }
    return () => {
      if (track) {
        track.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [index, products.length, visibleItems, originalProducts.length]);

  return (
    <section className="py-12 px-4 w-full relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500">
            Details to details is what makes Yarnshop different from the other
            themes.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden mx-auto w-[960px]">
        {" "}
        <div
          ref={trackRef}
          className={`flex gap-6 ${
            transition ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${index * totalWidth}px)`,
            width: `${products.length * totalWidth}px`,
          }}
        >
          {products.map((product, i) => (
            <div key={i} className="w-[300px] shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        {/* Arrows */}
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 border rounded-full shadow hover:bg-gray-100 z-10"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 border rounded-full shadow hover:bg-gray-100 z-10"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
