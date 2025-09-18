import { useAppSelector } from "./storeHooks";

import { selectProducts } from "@/store/product/productsSlice";
import { selectBestsellers } from "@/store/product/bestsellersSlice";
import { selectNewArrivals } from "@/store/product/newArrivalsSlice";

export const useProductsByType = (
  type: "category" | "bestsellers" | "newArrivals"
) => {
  switch (type) {
    case "category":
      return useAppSelector(selectProducts);
    case "bestsellers":
      return useAppSelector(selectBestsellers);
    case "newArrivals":
      return useAppSelector(selectNewArrivals);
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};
