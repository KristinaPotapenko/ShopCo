import { Product } from "@/types/product";

import ProductCard from "@/components/ui/cards/ProductCard/ProductCard";
import SkeletonProductCard from "@/components/ui/cards/ProductCard/SkeletonProductCard";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

export const useProductsContent = (
  products: Product[],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: string | null,
  retry: () => void
) => {
  if (status === "idle" || status === "loading") {
    return (
      <ul className="grid grid-cols-1 justify-items-center  [@media(min-width:450px)_and_(max-width:1023px)]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3.5 lg:gap-x-5 gap-y-6 lg:gap-y-9 mb-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonProductCard key={index} />
        ))}
      </ul>
    );
  }

  if (status === "succeeded") {
    if (products.length === 0) {
      return <div className="w-full text-center py-10">No products found</div>;
    }
    return (
      <ul className="grid grid-cols-1 justify-items-center  [@media(min-width:450px)_and_(max-width:1023px)]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3.5 lg:gap-x-5 gap-y-6 lg:gap-y-9 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.images[0]}
            title={product.title}
            rating={product.rating || 0}
            price={product.price || 0}
            discountPercentage={product?.discountPercentage || 0}
          />
        ))}
      </ul>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 w-full text-center py-10 mt-4">
        <p className="font-normal text-zinc-400">
          Error loading products: {error}
        </p>
        <PrimaryButton type="button" onClick={retry}>
          Try Again
        </PrimaryButton>
      </div>
    );
  }

  return null;
};
