import Image from "next/image";

import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
}

export default function ProductCard({
  image,
  title,
  rating,
  price,
  oldPrice,
  discountPercentage,
}: ProductCardProps) {
  return (
    <li className="flex flex-col basis-[25%] mb-8 lg:mb-0">
      <div className="relative aspect-square w-full mb-2.5 md:mb-4">
        <Image src={image} alt="" fill className="object-cover rounded-3xl" />
      </div>
      <div className="flex flex-col grow">
        <h3 className="grow text-base md:text-xl font-semibold mb-1 md:mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-2.5 md:gap-3.5 mb-1 md:mb-2">
          <ul className="flex items-center gap-1.5">
            <li>
              <Star className="w-6 h-6 text-transparent fill-amber-300" />
            </li>
            <li>
              <Star className="w-6 h-6 text-transparent fill-amber-300" />
            </li>
            <li>
              <Star className="w-6 h-6 text-transparent fill-amber-300" />
            </li>
            <li>
              <Star className="w-6 h-6 text-transparent fill-amber-300" />
            </li>
            <li>
              <Star className="w-6 h-6 text-transparent fill-gray-300" />
            </li>
          </ul>
          <p className="text-zinc-400 font-normal">
            <span className="text-black">{rating}/</span>5
          </p>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2.5">
          <p className="text-xl md:text-2xl font-semibold">${price}</p>
          {oldPrice && (
            <p className="text-xl md:text-2xl font-semibold text-zinc-400 line-through">
              ${oldPrice}
            </p>
          )}
          {discountPercentage && (
            <span className="py-0.5 md:py-1.5 px-2 md:px-3.5 text-xs md:text-sm font-normal text-red-500 bg-red-100 rounded-[60px]">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
