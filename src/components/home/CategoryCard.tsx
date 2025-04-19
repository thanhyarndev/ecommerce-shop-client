// src/components/home/CategoryCard.tsx
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  large?: boolean;
}

export default function CategoryCard({
  title,
  subtitle,
  image,
  href,
  large,
}: Props) {
  return (
    <Link
      href={href}
      className={`relative block group overflow-hidden rounded-md ${
        large ? "h-64" : "h-48"
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transform transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </Link>
  );
}
