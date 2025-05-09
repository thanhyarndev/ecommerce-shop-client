'use client';

import Image from 'next/image';
import { Suggestion } from '@/app/your-cart/data/sample-data';

export default function ProductSuggestion({ item }: { item: Suggestion }) {
  return (
    <div className="w-60 flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="h-40 w-full relative overflow-hidden rounded-t-lg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium mb-2">{item.name}</h3>
        <p className="text-orange-500 font-bold mb-4">
          {item.price.toLocaleString()} VND
        </p>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 text-sm font-semibold rounded">
          THÊM
        </button>
      </div>
    </div>
  );
}