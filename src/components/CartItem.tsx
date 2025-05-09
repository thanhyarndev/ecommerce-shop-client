'use client';

import Image from 'next/image';
import { CartItem } from '@/app/your-cart/data/sample-data';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function CartItemRow({ item }: { item: CartItem }) {
  const total = item.price * item.quantity;

  return (
    <div className="flex items-start py-6 border-b">
      <Image
        src={item.image}
        alt={item.name}
        width={120}
        height={120}
        className="object-cover"
      />
      <div className="flex-1 px-4">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <div className="text-gray-500 mb-2">
          Giá:{' '}
          {item.originalPrice && item.originalPrice !== item.price ? (
            <span className="line-through mr-2">
              {item.originalPrice.toLocaleString()} VND
            </span>
          ) : null}
          {item.price.toLocaleString()} VND
        </div>
        <div className="flex gap-6 mb-2">
          <div>
            <label className="block text-sm">Size</label>
            <select
              className="border rounded px-2 py-1"
              defaultValue={item.size}
            >
              <option>{item.size}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Số lượng</label>
            <select
              className="border rounded px-2 py-1"
              defaultValue={item.quantity}
            >
              <option>{item.quantity}</option>
            </select>
          </div>
        </div>
        <div
          className={`text-sm font-medium ${
            item.inStock ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {item.inStock ? 'Còn hàng' : 'Hết hàng'}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-xl font-bold mb-4">
          {total.toLocaleString()} VND
        </div>
        <button className="p-2 mb-2 border rounded">
          <HeartIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 bg-gray-800 text-white rounded">
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
