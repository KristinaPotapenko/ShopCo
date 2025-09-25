import { Product } from "@/types/product";

import Stars from "@/components/ui/Stars/Stars";
import { QuantitySelector } from "@/components/ui/QuantitySelector/QuantitySelector";

interface ProductInfoProps {
  product: Product | null | undefined;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-montserrat text-2xl lg:text-[40px] font-extrabold gap-3 lg:mb-3.5">
        {product?.title}
      </h1>
      <div className="flex items-center gap-4 mb-3 lg:mb-3.5">
        <Stars rating={product?.rating || 0} />
        <p className="text-zinc-400 font-normal">
          <span className="text-black">{product?.rating.toFixed(1)}/</span>5
        </p>
      </div>
      <div className="flex items-center gap-2.5 md:gap-3 mb-5">
        <p className="text-2xl md:text-4xl font-semibold">
          ${product?.price.toFixed(2)}
        </p>
        <p className="text-2xl md:text-4xl font-semibold text-zinc-400 line-through">
          $
          {product &&
            (
              product?.price -
              (product?.price * product?.discountPercentage) / 100
            ).toFixed(2)}
        </p>
        <span className="py-0.5 md:py-1.5 px-2 md:px-3.5 text-xs md:text-base font-normal text-red-500 bg-red-100 rounded-[60px]">
          -{product?.discountPercentage.toFixed(0)}%
        </span>
      </div>
      <p className="pb-6 border-b border-zinc-200">{product?.description}</p>
      <div>
        <p className="mt-6 font-normal text-black/60">Dimensions</p>
        <ul className="flex flex-wrap gap-4 pt-4 pb-6 text-black/60 border-b border-zinc-200">
          <li className="flex gap-1 px-5 lg:px-6 py-2.5 lg:py-3 rounded-[60px] bg-zinc-100">
            <p className="font-normal">Depth: </p>
            {product?.dimensions.depth}
          </li>
          <li className="flex gap-1 px-5 lg:px-6 py-2.5 lg:py-3 rounded-[60px] bg-zinc-100">
            <p className="font-normal">Height: </p>
            {product?.dimensions.height}
          </li>
          <li className="flex gap-1 px-5 lg:px-6 py-2.5 lg:py-3 rounded-[60px] bg-zinc-100">
            <p className="font-normal">Width: </p>
            {product?.dimensions.width}
          </li>
        </ul>
      </div>
      <div>
        <p className="mt-6 font-normal text-black/60">Tags</p>
        <ul className="flex flex-wrap gap-3 pt-4 pb-6 font-normal text-black/60 border-b border-zinc-200">
          {product?.tags.map((tag, index) => {
            return (
              <li
                key={index}
                className="px-5 lg:px-6 py-2.5 lg:py-3 rounded-[60px] bg-zinc-100"
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
      <QuantitySelector product={product} />
    </div>
  );
};
