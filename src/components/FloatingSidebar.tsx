"use client";

import { useState } from "react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// nếu có icon Zalo custom, bạn để trong public/icons/zalo.svg
// import ZaloIcon from 'public/icons/zalo.svg';

import { cartItems } from "@/app/your-cart/data/sample-data"; // Giả sử bạn đã có dữ liệu giỏ hàng

export default function FloatingSidebar() {
  const [open, setOpen] = useState(false);
  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <>
      {/* ==== Backdrop khi open ==== */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ==== Panel mini-cart ==== */}
      <div
        className={`
          fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl z-50 transform
          ${open ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300
        `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Giỏ hàng</h3>
          <button onClick={() => setOpen(false)} className="p-1">
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  x{item.quantity} —{" "}
                  {(item.price * item.quantity).toLocaleString()} VND
                </p>
              </div>
              <p className="font-semibold">
                {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold">
            TIẾP TỤC THANH TOÁN
          </button>
        </div>
      </div>

      {/* ==== Floating Buttons ==== */}
      <div className="fixed right-0 top-1/3 flex flex-col items-center space-y-4 z-50">
        {/* -- Mini cart button -- */}
        <button
          onClick={() => setOpen(true)}
          className="relative bg-orange-500 w-12 h-12 flex items-center justify-center rounded-tr-lg rounded-br-lg shadow-lg"
        >
          <ShoppingCartIcon className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-white text-orange-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        </button>

        {/* -- Social contacts -- */}
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          className="bg-gray-200 hover:bg-gray-300 w-12 h-12 flex items-center justify-center rounded-tr-lg rounded-br-lg shadow"
        >
          <FaFacebookF className="w-5 h-5 text-gray-700" />
        </a>
        <a
          href="https://zalo.me/yourid"
          target="_blank"
          className="bg-gray-200 hover:bg-gray-300 w-12 h-12 flex items-center justify-center rounded-tr-lg rounded-br-lg shadow"
        >
          {/* thay bằng <img src="/icons/zalo.svg" .../> nếu bạn có icon */}
          ZALO
        </a>
        <a
          href="https://www.instagram.com/yourpage"
          target="_blank"
          className="bg-gray-200 hover:bg-gray-300 w-12 h-12 flex items-center justify-center rounded-tr-lg rounded-br-lg shadow"
        >
          <FaInstagram className="w-5 h-5 text-gray-700" />
        </a>
        <a
          href="https://www.youtube.com/yourchannel"
          target="_blank"
          className="bg-gray-200 hover:bg-gray-300 w-12 h-12 flex items-center justify-center rounded-tr-lg rounded-br-lg shadow"
        >
          <FaYoutube className="w-5 h-5 text-gray-700" />
        </a>
      </div>
    </>
  );
}
