"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getCategoriesList, selectCategories } from "@/store/categoriesSlice";

import NavLink from "../NavLink/NavLink";
import { Loader } from "../Loader/Loader";

import { ChevronDown as ArrowIcon } from "lucide-react";

export default function Navigation() {
  const dispatch = useAppDispatch();
  const { categories, status } = useAppSelector(selectCategories);

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getCategoriesList());
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsOpenDropdown]);

  return (
    <nav>
      <ul className="hidden lg:flex lg:items-center lg:gap-6">
        <li className="relative flex items-center gap-1.5 cursor-pointer">
          <button
            type="button"
            className="relative flex items-center gap-1.5  font-normal text-nowrap outline-none cursor-pointer 
             before:absolute before:inset-0 before:w-0 before:bg-zinc-300/20 before:rounded-md before:origin-center
             hover:before:w-full focus:before:w-full
             hover:px-3 hover:py-2 focus:px-3 focus:py-2
             transition-all duration-600 ease-in-out"
            onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          >
            Categories
            <ArrowIcon className="w-5 h-5" />
          </button>
          <div
            ref={dropdownRef}
            className={`absolute top-full left-0 z-20 w-56 mt-2 bg-white rounded-xl shadow-lg overflow-x-scroll overflow-y-scroll transition-all duration-300 ease-in-out origin-top ${
              isOpenDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {status === "idle" || status === "loading" ? (
              <div className="flex items-center justify-center p-6">
                <Loader smallSize={true} />
              </div>
            ) : status === "failed" ? (
              <div className="p-6 font-semibold text-red-600 text-center bg-red-50 border border-red-200 rounded-md">
                Failed to load categories. Please try again.
              </div>
            ) : (
              <ul className="flex flex-col">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="font-medium text-black hover:bg-zinc-300/20 cursor-pointer transition-colors duration-200"
                    onClick={() => setIsOpenDropdown(false)}
                  >
                    <Link
                      className="block w-full px-4 py-2 h-full font-normal outline-none"
                      href={`/category/${category}`}
                    >
                      {category[0].toUpperCase() + category.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li>
          <NavLink href="/products">On Sale</NavLink>
        </li>
        <li>
          <NavLink href="/products/newArrivals">New Arrivals</NavLink>
        </li>
        <li>
          <NavLink href="/products/bestsellers">Bestsellers</NavLink>
        </li>
      </ul>
    </nav>
  );
}
