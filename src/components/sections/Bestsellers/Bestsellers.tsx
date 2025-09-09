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

  useEffect(() => {
    dispatch(getBestsellers());
  }, []);

  const renderContent = useProductContent(
    products,
    status,
    error,
    getBestsellers
  );

  return (
    <section className="container flex flex-col lg:items-center mx-auto pt-24 pb-16 px-4">
      <SectionTitle hasMargin={false}>top selling</SectionTitle>

      {renderContent}

      {status === "succeeded" && products.length > 0 && (
        <ViewAllButton>View All</ViewAllButton>
      )}
    </section>
  );
}
