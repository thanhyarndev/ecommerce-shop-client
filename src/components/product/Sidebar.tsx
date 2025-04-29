"use client";

import React, { useState } from "react";

const genderOptions = ["All", "Men", "Women", "Kid"];
const categoryOptions = ["Áo", "Quần"];
const priceRanges = [
  { label: "< 200k", value: "0-200000" },
  { label: "200k - 500k", value: "200000-500000" },
  { label: "500k - 1tr", value: "500000-1000000" },
  { label: "1tr - 1.5tr", value: "1000000-1500000" },
];
const sortOptions = [
  { label: "Giá tăng dần", value: "price-asc" },
  { label: "Giá giảm dần", value: "price-desc" },
  { label: "Tên A-Z", value: "name-asc" },
  { label: "Tên Z-A", value: "name-desc" },
];

interface SidebarProps {
  // khi cần thực sự filter, bạn có thể truyền các handler ở đây
  // onFilterChange?: (filters: { gender, category, price, sort }) => void
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [gender, setGender] = useState("All");
  const [category, setCategory] = useState("Áo");
  const [price, setPrice] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  return (
    <div className="p-4 space-y-8 text-sm">
      {/* Gender */}
      <div>
        <h3 className="text-xl font-bold mb-2">GIỚI TÍNH</h3>
        <ul className="space-y-1">
          {genderOptions.map((opt) => (
            <li key={opt} className="flex items-center">
              <input
                type="radio"
                id={`gender-${opt}`}
                name="gender"
                value={opt}
                checked={gender === opt}
                onChange={() => setGender(opt)}
                className="mr-2 accent-orange-500"
              />
              <label htmlFor={`gender-${opt}`} className="cursor-pointer">
                {opt}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-xl font-bold mb-2">DANH MỤC</h3>
        <ul className="space-y-1">
          {categoryOptions.map((opt) => (
            <li key={opt} className="flex items-center">
              <input
                type="radio"
                id={`cat-${opt}`}
                name="category"
                value={opt}
                checked={category === opt}
                onChange={() => setCategory(opt)}
                className="mr-2 accent-orange-500"
              />
              <label htmlFor={`cat-${opt}`} className="cursor-pointer">
                {opt}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xl font-bold mb-2">GIÁ</h3>
        <ul className="space-y-1">
          {priceRanges.map(({ label, value }) => (
            <li key={value} className="flex items-center">
              <input
                type="radio"
                id={`price-${value}`}
                name="price"
                value={value}
                checked={price === value}
                onChange={() => setPrice(value)}
                className="mr-2 accent-orange-500"
              />
              <label htmlFor={`price-${value}`} className="cursor-pointer">
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Sort */}
      <div>
        <h3 className="text-xl font-bold mb-2">SẮP XẾP</h3>
        <ul className="space-y-1">
          {sortOptions.map(({ label, value }) => (
            <li key={value} className="flex items-center">
              <input
                type="radio"
                id={`sort-${value}`}
                name="sort"
                value={value}
                checked={sort === value}
                onChange={() => setSort(value)}
                className="mr-2 accent-orange-500"
              />
              <label htmlFor={`sort-${value}`} className="cursor-pointer">
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
