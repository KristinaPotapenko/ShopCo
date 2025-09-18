"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import {
  getBestsellers,
  selectBestsellers,
} from "@/store/product/bestsellersSlice";

import { useProductContent } from "@/hooks/useProductContent";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ViewAllButton from "@/components/ui/ViewAllButton/ViewAllButton";

export default function Bestsellers() {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(selectBestsellers);

  const bestsellers = products
    .toSorted((a: any, b: any) => b.rating - a.rating)
    .slice(0, 4);

  useEffect(() => {
    dispatch(getBestsellers({}));
  }, []);

  const renderContent = useProductContent(bestsellers, status, error, () =>
    getBestsellers({})
  );

  return (
    <section className="container flex flex-col lg:items-center mx-auto pt-24 pb-16 px-4">
      <SectionTitle hasMargin={false}>top selling</SectionTitle>

      {renderContent}

      {status === "succeeded" && bestsellers.length > 0 && (
        <ViewAllButton href="/products/bestsellers">View All</ViewAllButton>
      )}
    </section>
  );
}
