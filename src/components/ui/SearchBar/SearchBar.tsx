"use client";

import Input from "../Input/Input";
import IconButton from "../IconButton/IconButton";

import { Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import {
  productsSearch,
  selectProductsSearch,
} from "@/store/productsSearchSlice";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(selectProductsSearch);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      query.trim().length > 0 && dispatch(productsSearch(query));
    }
  }, [debouncedQuery]);

  return (
    <div className="relative lg:flex-1 lg:mr-2 max-w-sm">
      <div className="hidden relative lg:block">
        <label htmlFor="serch" className="sr-only">
          Search products
        </label>
        <Input
          id="search"
          type="text"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          placeholder="Search for products..."
        />
        <SearchIcon
          className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-400"
          strokeWidth={2.5}
        />
      </div>
      {query.length > 0 && products && products.length > 0 && (
        <div className="hidden relative lg:block">
          <div className="absolute top-full left-0 z-20 w-80 max-h-96 mt-2 bg-white rounded-xl shadow-lg overflow-x-scroll overflow-y-scroll transition-all duration-300 ease-in-out origin-top">
            <ul className="flex flex-col">
              {products &&
                products.map((product) => {
                  return (
                    <li
                      key={product.id}
                      className="flex items-center gap-3 p-2 hover:bg-zinc-100 cursor-pointer transition-colors duration-200"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {product.title}
                        </span>
                        <span className="text-xs text-gray-500 truncate">
                          {product.brand} — {product.category}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                        ${product.price}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
      <div className="flex lg:hidden">
        <IconButton href="/search">
          <SearchIcon className="w-6 h-6" strokeWidth={2.5} />
        </IconButton>
      </div>
    </div>
  );
}
