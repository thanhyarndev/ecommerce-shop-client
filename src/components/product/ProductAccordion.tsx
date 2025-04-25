"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const data = [
  {
    title: "THÔNG TIN SẢN PHẨM",
    content:
      "Áo thun retro cổ bẻ lấy cảm hứng từ tuyển Việt Nam 95. Chất liệu vải cao cấp, thoáng khí, thiết kế cổ điển kết hợp hiện đại.",
  },
  {
    title: "QUY ĐỊNH ĐỔI SẢN PHẨM",
    content:
      "Được đổi trong vòng 7 ngày nếu sản phẩm chưa qua sử dụng, còn nguyên tag và hóa đơn mua hàng.",
  },
  {
    title: "BẢO HÀNH THẾ NÀO ?",
    content:
      "Sản phẩm được bảo hành trong vòng 1 tháng với các lỗi do nhà sản xuất như bung chỉ, lem màu, hỏng form áo.",
  },
];

export default function ProductAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full divide-y border-t border-gray-300">
      {data.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center py-4 text-left font-semibold"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: activeIndex === index ? "200px" : "0px",
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <p className="text-sm text-muted-foreground pb-4 px-1">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
