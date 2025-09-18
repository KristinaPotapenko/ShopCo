"use client";

import { useEffect, useState } from "react";

import { useAppDispatch } from "@/hooks/storeHooks";
import { getProductsByCategory } from "@/store/product/productsSlice";
import { getBestsellers } from "@/store/product/bestsellersSlice";
import { getNewArrivals } from "@/store/product/newArrivalsSlice";

import { formatType } from "@/helpers/formatType";
import { useProductsContent } from "@/hooks/useProductsContent";
import { useProductsByType } from "@/hooks/useProductsByType";

import { Pagination } from "@/components/ui/Pagination/Pagination";

interface ProductsProps {
  type: "category" | "bestsellers" | "newArrivals";
  category?: string;
  isBestsellers?: boolean;
}

export const Products = ({ type, category = "beauty" }: ProductsProps) => {
  const dispatch = useAppDispatch();
  const { products, totalProducts, status, error } = useProductsByType(type);

  const totalPages = totalProducts ? Math.ceil(totalProducts / 12) : 1;
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (type === "category") {
      dispatch(
        getProductsByCategory({ category, skip: (currentPage - 1) * 12 })
      );
    } else if (type === "bestsellers") {
      dispatch(getBestsellers({ skip: (currentPage - 1) * 12 }));
    } else if (type === "newArrivals") {
      dispatch(getNewArrivals({ skip: (currentPage - 1) * 12 }));
    }
  }, [type, category, currentPage]);

  const renderContent = useProductsContent(products || [], status, error, () =>
    getProductsByCategory({ category, skip: (currentPage - 1) * 12 })
  );

  return (
    <section className="container px-4 mx-auto pb-16">
      <div className="flex justify-between gap-4 font-normal mb-16">
        <h2 className="text-4xl font-extrabold">
          {type === "category"
            ? category[0].toUpperCase() + category.slice(1)
            : formatType(type)}
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
      {renderContent}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};
