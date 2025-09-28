import Image from "next/image";

import { BASE_IMAGE } from "@/constants/constance";
import { CartItem as CartType } from "@/types/cart";

import { QuantitySelector } from "@/components/ui/QuantitySelectorGroup/QuantitySelector";

import { Trash2 as Trash } from "lucide-react";
import { Product } from "@/types/product";
import { ProductAttribute } from "./ProductAttribute/ProductAttribute";

interface CartItemProps {
  product: CartType;
  products: Product[];
  index: number;
  cartLength: number;
}

export const CartItem = ({
  product,
  products,
  index,
  cartLength,
}: CartItemProps) => {
  return (
    <li
      className={`flex flex-col sm:flex-row items-center gap-6 lg:gap-4 pb-4 lg:pb-6 ${
        index !== cartLength - 1 ? "border-b" : ""
      } border-zinc-200`}
    >
      <Image
        src={product.thumbnail || BASE_IMAGE}
        alt="product"
        width={125}
        height={125}
      />
      <div className="w-full">
        <div className="flex items-start justify-between gap-4 w-full mb-1">
          <h2 className="text-base lg:text-xl font-bold text-black">
            {product.title}
          </h2>
          <Trash className="w-6 h-6 text-red-600" />
        </div>
        {products?.length > 0 && (
          <div className="text-zinc-500">
            <ProductAttribute label="Width:">
              {products[index].dimensions.width}
            </ProductAttribute>
            <ProductAttribute label="Height:">
              {products[index].dimensions.height}
            </ProductAttribute>
            <ProductAttribute label="Depth:">
              {products[index].dimensions.depth}
            </ProductAttribute>
          </div>
        )}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-xl lg:text-2xl font-bold text-black">
            ${product.discountedTotal.toFixed()}
          </p>
          {products?.length > 0 && (
            <QuantitySelector
              product={products[index]}
              quantity={product.quantity}
            />
          )}
        </div>
      </div>
    </li>
  );
};
