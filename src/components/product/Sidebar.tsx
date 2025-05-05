"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const genderOptions = ["TẤT CẢ", "NAM", "NỮ", "TRẺ EM"];
const categoryOptions = [
  "Phụ kiện",
  "Áo thể thao",
  "Quần thể thao",
  "Thiết bị bóng đá",
  "Giày dép",
  "Áo khoác",
];
const statusOptions = ["Limited Edition", "Online Only", "Sale off", "New Arrival"];
const styleOptions = ["Thể thao", "Đường phố", "Cổ điển"];
const productLineOptions = ["Adidas Performance", "Nike Air", "Puma Future"];
const priceRanges = [
  { label: "< 200k", value: "0-200000" },
  { label: "200k - 500k", value: "200000-500000" },
  { label: "500k - 1tr", value: "500000-1000000" },
  { label: "1tr - 1.5tr", value: "1000000-1500000" },
];
const materialOptions = ["Cotton", "Polyester", "Nylon"];
const colorOptions = [
  { name: "Teal", code: "#006d6d" },
  { name: "Green", code: "#6f9940" },
  { name: "Gray", code: "#cccccc" },
  { name: "Blue", code: "#1b4f72" },
  { name: "White", code: "#ffffff" },
  { name: "Brown", code: "#8d6e63" },
  { name: "Purple", code: "#9c27b0" },
  { name: "Pink", code: "#f48fb1" },
  { name: "Yellow", code: "#fdd835" },
  { name: "Orange", code: "#fb8c00" },
  { name: "Red", code: "#e53935" },
  { name: "Black", code: "#212121" },
];

const FilterGroup = ({
  title,
  items,
  selected,
  toggleFn,
}: {
  title: string;
  items: string[];
  selected: string[];
  toggleFn: (val: string) => void;
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <div
        className="text-xl font-bold mb-2 text-orange-600 cursor-pointer flex items-center gap-2"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{title}</span>
        <span>{expanded ? "▲" : "▼"}</span>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden space-y-2"
          >
            {items.map((val) => (
              <div
                key={val}
                className={`cursor-pointer text-sm px-2 py-1 flex justify-between items-center rounded ${selected.includes(val) ? "bg-gray-100 font-bold" : "hover:bg-gray-100"}`}
                onClick={() => toggleFn(val)}
              >
                <span>{val}</span>
                {selected.includes(val) && <span className="text-lg font-bold">×</span>}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [gender, setGender] = useState("TẤT CẢ");
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedLines, setSelectedLines] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [colorExpanded, setColorExpanded] = useState(true);

  const toggleItem = (item: string, setFunc: React.Dispatch<React.SetStateAction<string[]>>) => {
    setFunc((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  return (
    <div className="p-4 space-y-6 text-sm">
      {/* Gender */}
      <div>
        <div className="flex gap-4 font-bold text-lg border-b pb-2">
          {genderOptions.map((opt) => (
            <span
              key={opt}
              className={`cursor-pointer ${gender === opt ? "text-black" : "text-gray-400"}`}
              onClick={() => setGender(opt)}
            >
              {opt}
            </span>
          ))}
        </div>
      </div>

      <FilterGroup
        title="DANH MỤC"
        items={categoryOptions}
        selected={selectedCategories}
        toggleFn={(val) => toggleItem(val, setSelectedCategories)}
      />
      <FilterGroup title="TRẠNG THÁI" items={statusOptions} selected={selectedStatus} toggleFn={(val) => toggleItem(val, setSelectedStatus)} />
      <FilterGroup title="KIỂU DÁNG" items={styleOptions} selected={selectedStyles} toggleFn={(val) => toggleItem(val, setSelectedStyles)} />
      <FilterGroup title="DÒNG SẢN PHẨM" items={productLineOptions} selected={selectedLines} toggleFn={(val) => toggleItem(val, setSelectedLines)} />
      <FilterGroup title="GIÁ" items={priceRanges.map((p) => p.label)} selected={selectedPrices} toggleFn={(val) => toggleItem(val, setSelectedPrices)} />
      <FilterGroup title="CHẤT LIỆU" items={materialOptions} selected={selectedMaterials} toggleFn={(val) => toggleItem(val, setSelectedMaterials)} />

      {/* Color */}
      <div>
        <div
          className="text-xl font-bold mb-2 text-orange-600 cursor-pointer flex items-center gap-2"
          onClick={() => setColorExpanded(!colorExpanded)}
        >
          <span>MÀU SẮC</span>
          <span>{colorExpanded ? "▲" : "▼"}</span>
        </div>
        <AnimatePresence initial={false}>
          {colorExpanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-6 gap-2 overflow-hidden"
            >
              {colorOptions.map(({ name, code }) => (
                <li
                  key={name}
                  className={`w-6 h-6 border rounded cursor-pointer ${selectedColors.includes(name) ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: code }}
                  title={name}
                  onClick={() => toggleItem(name, setSelectedColors)}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sidebar;