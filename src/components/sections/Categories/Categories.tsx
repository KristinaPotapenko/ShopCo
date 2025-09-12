"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getCategoriesList, selectCategories } from "@/store/categoriesSlice";

import CategoryCard from "@/components/ui/cards/CategoryCard/CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ViewAllButton from "@/components/ui/ViewAllButton/ViewAllButton";

export default function Categories() {
  const dispatch = useAppDispatch();
  const { categories, status, error } = useAppSelector(selectCategories);

  const newCategories = categories.slice(0, 4);

  useEffect(() => {
    dispatch(getCategoriesList());
  }, []);

  return (
    <section className="container flex flex-col mx-auto px-4 py-16">
      <div className="flex flex-col px-6 py-10 lg:py-20 lg:px-16 bg-[#F0F0F0] rounded-[40px]">
        <SectionTitle>BROWSE BY category</SectionTitle>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
          {newCategories.map((category, i) => {
            const rowIndex = Math.floor(i / 2);
            const isEvenRow = rowIndex % 2 === 0;
            const isEvenCol = i % 2 === 0;

            const isBigCol =
              (isEvenCol && !isEvenRow) || (!isEvenCol && isEvenRow);

            return <CategoryCard key={i} name={category} isBigCol={isBigCol} />;
          })}
        </ul>
        <ViewAllButton>View All Categories</ViewAllButton>
      </div>
    </section>
  );
}
