"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="border rounded overflow-hidden">
        <Image
          src={images[selected]}
          alt="Main Product Image"
          width={600}
          height={600}
          className="w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {images.map((img, index) => (
          <button key={index} onClick={() => setSelected(index)}>
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className={`border rounded ${index === selected ? "ring-2 ring-black" : ""}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}