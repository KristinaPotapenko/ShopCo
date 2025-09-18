"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { useCategoriesContect } from "@/hooks/useCategoriesContent";
import { getCategoriesList, selectCategories } from "@/store/categoriesSlice";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ViewAllButton from "@/components/ui/ViewAllButton/ViewAllButton";

export default function Categories() {
  const dispatch = useAppDispatch();
  const { categories, status, error } = useAppSelector(selectCategories);

  const newCategories = categories.slice(0, 4);

  useEffect(() => {
    dispatch(getCategoriesList());
  }, []);

  const renderContent = useCategoriesContect(
    newCategories,
    status,
    error,
    getCategoriesList
  );

  return (
    <section className="container flex flex-col mx-auto px-4 py-16">
      <div className="flex flex-col px-6 py-10 lg:py-20 lg:px-16 bg-[#F0F0F0] rounded-[40px]">
        <SectionTitle>BROWSE BY category</SectionTitle>

        {renderContent}

        {status === "succeeded" && categories.length > 0 && (
          <ViewAllButton href="/categories">View All Categories</ViewAllButton>
        )}
      </div>
    </section>
  );
}
