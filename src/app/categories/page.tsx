"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getCategoriesList, selectCategories } from "@/store/categoriesSlice";

import { useCategoriesContect } from "@/hooks/useCategoriesContent";

import Newsletter from "@/components/sections/Newsletter/Newsletter";

export default function CategoriesPage() {
  const dispatch = useAppDispatch();

  const { categories, status, error } = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategoriesList());
  }, []);

  const renderContent = useCategoriesContect(
    categories,
    status,
    error,
    getCategoriesList,
    10
  );

  return (
    <>
      <section className="container mx-auto pt-16 pb-0 xl:pb-16 px-4">
        <div className="px-6 py-10 lg:py-20 lg:px-16 bg-[#F0F0F0] rounded-[40px]">
          {renderContent}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
