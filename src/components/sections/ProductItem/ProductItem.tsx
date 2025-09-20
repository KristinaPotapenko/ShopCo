import { Product as ProductType } from "@/types/product";

import { ProductImages } from "./ProductImages/ProductImages";
import { ProductInfo } from "../ProductInfo/ProductInfo";

interface ProductProps {
  product: ProductType | null | undefined;
}

export const ProductItem = ({ product }: ProductProps) => {
  return (
    <section className="flex flex-col xl:flex-row gap-5 lg:gap-10 container px-4 mx-auto mb-20">
      <ProductImages product={product} />
      <ProductInfo product={product} />
    </section>
  );
};
