import Image from "next/image";

interface ProductProps {
  title: string;
  price: number;
  image: string;
  rating?: number;
}

export default function ProductCard({
  title,
  price,
  image,
  rating = 5,
}: ProductProps) {
  return (
    <div className="w-[280px] flex-shrink-0">
      <div className="relative h-[360px] w-full overflow-hidden rounded-lg">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex justify-between items-center mt-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="text-yellow-400 text-sm">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
      </div>
      <p className="text-gray-500 text-sm">${price.toFixed(2)}</p>
    </div>
  );
}
