import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";
import { API_BASE } from "@/constants/constance";

import { Product } from "@/types/product";

interface FetchProductsResponse {
  products: Product[];
  totalProducts: number;
}

const fetchProductsByCategory = async (
  category: string,
  skip = 0,
  limit = 12
): Promise<FetchProductsResponse> => {
  const response = await axios.get(
    `${API_BASE}/products/category/${category}`,
    {
      params: { limit, skip },
    }
  );

  return {
    products: response?.data?.products,
    totalProducts: response?.data?.total,
  };
};

export const getProductsByCategory = createAsyncThunk(
  "/product/getProductByCategory",
  async (
    {
      category,
      skip,
      limit,
    }: { category: string; skip?: number; limit?: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchProductsByCategory(category, skip, limit);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load product"
      );
    }
  }
);

interface ProductsState {
  products: Product[] | null;
  totalProducts: number | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: null,
  totalProducts: null,
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProductsByCategory.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload.products;
        state.totalProducts = payload.totalProducts;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
