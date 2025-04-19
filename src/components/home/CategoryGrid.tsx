// src/components/home/CategoryGrid.tsx
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Women",
    subtitle: "Best Clothes For Women",
    image: "/products/women.jpg",
    href: "/women",
  },
  {
    title: "Men",
    subtitle: "Best Clothes For Men",
    image: "/products/men.jpg",
    href: "/men",
  },
  {
    title: "Kids",
    subtitle: "Best Clothes For Kids",
    image: "/products/kids.jpg",
    href: "/kids",
  },
  {
    title: "Accessories",
    subtitle: "Best Trend Accessories",
    image: "/products/accessories.jpg",
    href: "/explore",
  },
];

export default function CategoryGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-7xl mx-auto">
      {/* First column: 1 lớn (Women) + 1 nhỏ (Kids) */}
      <div className="space-y-4">
        <CategoryCard {...categories[0]} large />
        <CategoryCard {...categories[2]} />
      </div>

      {/* Second column: full height banner chính */}
      <div className="row-span-2 hidden md:block">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-center p-8">
          <h2 className="text-2xl font-semibold">We Are Hexashop</h2>
        </div>
      </div>

      {/* Third column: 1 lớn (Men) + 1 nhỏ (Accessories) */}
      <div className="space-y-4">
        <CategoryCard {...categories[1]} large />
        <CategoryCard {...categories[3]} />
      </div>
    </section>
  );
}
