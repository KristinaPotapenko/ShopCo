"use client";

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import {
  getProductsByCategory,
  selectProducts,
} from "@/store/product/productsSlice";

import { Product } from "@/store/product/productSlice";

import { Pagination } from "@/components/ui/Pagination/Pagination";
import ProductCard from "@/components/ui/cards/ProductCard/ProductCard";
import SkeletonProductCard from "@/components/ui/cards/ProductCard/SkeletonProductCard";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

interface ProductsProps {
  category: string;
}

export const Products = ({ category }: ProductsProps) => {
  const dispatch = useAppDispatch();
  const { products, totalProducts, status, error } =
    useAppSelector(selectProducts);

  const totalPages = totalProducts ? Math.ceil(totalProducts / 10) : 1;
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getProductsByCategory({ category, skip: (currentPage - 1) * 10 }));
  }, [category, currentPage]);

  const renderContent = (
    products: Product[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string | null,
    retry: () => void
  ) => {
    if (status === "idle" || status === "loading") {
      return (
        <ul className="grid grid-cols-1 justify-items-center  [@media(min-width:450px)_and_(max-width:1023px)]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3.5 lg:gap-x-5 gap-y-6 lg:gap-y-9 mb-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonProductCard key={index} />
          ))}
        </ul>
      );
    }

    if (status === "succeeded") {
      if (products.length === 0) {
        return (
          <div className="w-full text-center py-10">No products found</div>
        );
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

  return (
    <section className="container px-4 mx-auto pb-16">
      <div className="flex justify-between gap-4 font-normal mb-16">
        <h2 className="text-4xl font-extrabold">
          {category[0].toUpperCase() + category.slice(1)}
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-3 self-end">
          <p className="text-black/60 text-center">
            Showing {currentPage}/{totalPages} of {totalProducts || 0} Products
          </p>
          <div className="flex items-center gap-1">
            <p className="text-black/60 text-center">Sort by:</p>
            <select className="text-black">
              <option>Most Popular</option>
              <option>Sort by Price</option>
              <option>Sort by Rating</option>
            </select>
          </div>
        </div>
      </div>
      {renderContent(products || [], status, error, () =>
        getProductsByCategory({ category, skip: (currentPage - 1) * 10 })
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};
