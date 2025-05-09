'use client';

import { useState } from 'react';
import { CartItem } from '@/app/your-cart/data/sample-data';

export default function OrderSummary({ cart }: { cart: CartItem[] }) {
  const [promo, setPromo] = useState('');
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const original = cart.reduce(
    (sum, i) => sum + (i.originalPrice ?? i.price) * i.quantity,
    0
  );
  const discount = original - subtotal;

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-xl font-semibold mb-4">ĐƠN HÀNG</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">NHẬP MÃ KHUYẾN MÃI</label>
        <div className="flex">
          <input
            type="text"
            value={promo}
            onChange={e => setPromo(e.target.value)}
            className="flex-1 border px-3 py-2"
            placeholder="Mã khuyến mãi"
          />
          <button className="bg-orange-500 text-white px-4 py-2 ml-2">
            ÁP DỤNG
          </button>
        </div>
      </div>

      <hr className="border-dashed border-gray-300 mb-4" />

      <div className="flex justify-between mb-2">
        <span>Đơn hàng</span>
        <span>{original.toLocaleString()} VND</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Giảm</span>
        <span className="text-gray-600">-{discount.toLocaleString()} VND</span>
      </div>

      <hr className="border-dashed border-gray-300 mb-4" />

      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-lg">Tạm tính</span>
        <span className="font-bold text-xl">{subtotal.toLocaleString()} VND</span>
      </div>

      <button className="w-full bg-orange-500 text-white py-3 font-semibold">
        TIẾP TỤC THANH TOÁN
      </button>
    </div>
  );
}
