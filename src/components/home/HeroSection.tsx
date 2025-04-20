import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Women",
    subtitle: "Best Clothes For Women",
    image: "/images/homepage/women.jpg",
    href: "/women",
  },
  {
    title: "Men",
    subtitle: "Best Clothes For Men",
    image: "/images/homepage/men.jpg",
    href: "/men",
  },
  {
    title: "Kids",
    subtitle: "Best Clothes For Kids",
    image: "/images/homepage/kid.jpg",
    href: "/kids",
  },
  {
    title: "Accessories",
    subtitle: "Best Trend Accessories",
    image: "/images/homepage/accessories.jpg",
    href: "/explore",
  },
];

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] py-10 px-0 w-full">
      {/* LEFT - Main banner */}
      <div className="relative h-[560px] w-full overflow-hidden">
        <Image
          src="/images/homepage/left-banner.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 z-10 text-white">
          <h2 className="text-4xl font-bold mb-2">We Are Yarnshop</h2>
          <p className="text-base mb-4">
            Awesome, clean & creative HTML5 Template
          </p>
          <Link
            href="#"
            className="border border-white px-5 py-2 hover:bg-white hover:text-black transition"
          >
            Purchase Now!
          </Link>
        </div>
      </div>

      {/* RIGHT - Grid 2x2 */}
      <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="relative group h-[270px] w-full overflow-hidden rounded-md"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-4">
              <h3 className="text-lg font-bold">{cat.title}</h3>
              <p className="text-sm">{cat.subtitle}</p>
            </div>

            {/* Hover content */}
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition bg-black/60 flex items-center justify-center text-white text-center p-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">{cat.title}</h4>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="border border-white px-4 py-1 hover:bg-white hover:text-black transition inline-block">
                  Discover More
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
