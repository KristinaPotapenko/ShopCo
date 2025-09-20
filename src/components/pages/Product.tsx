"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getProduct, selectProduct } from "@/store/product/productSlice";

import { ProductItem } from "../sections/ProductItem/ProductItem";
import { ProductTabs } from "../sections/ProductTabs/ProductTabs";

interface ProductProps {
  id: number;
}

export function Product({ id }: ProductProps) {
  const dispatch = useAppDispatch();
  const { product, status, error } = useAppSelector(selectProduct);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      <ProductItem product={product} />
      <ProductTabs product={product} />
    </>
  );
}
