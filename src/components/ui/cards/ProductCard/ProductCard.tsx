import Image from "next/image";
import Link from "next/link";

import Stars from "../../Stars/Stars";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: number;
  discountPercentage?: number;
}

export default function ProductCard({
  id,
  image,
  title,
  rating,
  price,
  discountPercentage,
}: ProductCardProps) {
  return (
    <li className="flex-shrink-0 w-64 md:w-80 min-h-full mb-8 lg:mb-0">
      <Link
        className="flex flex-col min-h-full p-4 transition-transform duration-300 hover:-translate-y-2 
          hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] 
          rounded-3xl cursor-pointer"
        href={`/product/${id}`}
      >
        <div className="relative aspect-square w-full mb-2.5 md:mb-4">
          <Image src={image} alt="" fill className="object-cover rounded-3xl" />
        </div>
        <div className="flex flex-col grow">
          <h3 className="grow text-base md:text-xl font-semibold mb-1 md:mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-2.5 md:gap-3.5 mb-1 md:mb-2">
            <Stars rating={rating} />
            <p className="text-zinc-400 font-normal">
              <span className="text-black">{rating.toFixed(1)}/</span>5
            </p>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2.5">
            <p className="text-xl md:text-2xl font-semibold">
              $
              {discountPercentage &&
                (price - (price * discountPercentage) / 100).toFixed(2)}
            </p>
            <p className="text-xl md:text-2xl font-semibold text-zinc-400 line-through">
              ${price.toFixed(2)}
            </p>

            <span className="py-0.5 md:py-1.5 px-2 md:px-3.5 text-xs md:text-sm font-normal text-red-500 bg-red-100 rounded-[60px]">
              -{discountPercentage?.toFixed()}%
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
