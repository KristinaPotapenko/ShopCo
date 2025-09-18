import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";
import { API_BASE } from "@/constants/constance";

import { Product } from "@/types/product";

interface FetchBestsellersResponse {
  products: Product[];
  totalProducts: number;
}

async function fetchBestsellers(
  skip = 0,
  limit = 12
): Promise<FetchBestsellersResponse> {
  const response = await axios.get(`${API_BASE}/products`, {
    params: { limit, skip },
  });

  return {
    products: response?.data?.products,
    totalProducts: response?.data?.total,
  };
}

export const getBestsellers = createAsyncThunk(
  "product/getBestsellers",
  async (
    { skip, limit }: { skip?: number; limit?: number },
    { rejectWithValue }
  ) => {
    try {
      const { products, totalProducts } = await fetchBestsellers(skip, limit);

      return {
        products,
        totalProducts,
      };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load products"
      );
    }
  }
);

interface Bestsellers {
  products: Product[];
  totalProducts: number | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: Bestsellers = {
  products: [],
  totalProducts: null,
  status: "idle",
  error: null,
};

const bestsellersSlice = createSlice({
  name: "bestsellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBestsellers.pending, (state) => {
        (state.status = "loading"), (state.error = null);
      })
      .addCase(getBestsellers.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload.products;
        state.totalProducts = payload.totalProducts;
      })
      .addCase(getBestsellers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectBestsellers = (state: RootState) => state.bestsellers;

export default bestsellersSlice.reducer;
