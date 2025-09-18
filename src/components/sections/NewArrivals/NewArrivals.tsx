"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import {
  getNewArrivals,
  selectNewArrivals,
} from "@/store/product/newArrivalsSlice";

import { useProductContent } from "@/hooks/useProductContent";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ViewAllButton from "@/components/ui/ViewAllButton/ViewAllButton";

export default function NewArrivals() {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(selectNewArrivals);

  const newArrivals = products.slice(0, 4);

  useEffect(() => {
    dispatch(getNewArrivals({}));
  }, []);

  const renderContent = useProductContent(newArrivals, status, error, () =>
    getNewArrivals({})
  );

  return (
    <section className="container flex flex-col lg:items-center mx-auto py-16 px-4 border-b border-zinc-200">
      <SectionTitle hasMargin={false}>NEW ARRIVALS</SectionTitle>

      {renderContent}

      {status === "succeeded" && newArrivals.length > 0 && (
        <ViewAllButton href="/products/newArrivals">View All</ViewAllButton>
      )}
    </section>
  );
}
