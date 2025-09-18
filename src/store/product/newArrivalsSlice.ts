import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";
import { API_BASE } from "@/constants/constance";
import { Product } from "@/types/product";

interface FetchNewArrivalsResponse {
  products: Product[];
  totalProducts: number;
}

async function fetchNewArrivals(
  skip = 0,
  limit = 12
): Promise<FetchNewArrivalsResponse> {
  const response = await axios.get(`${API_BASE}/products`, {
    params: { limit, skip },
  });

  return {
    products: response?.data?.products,
    totalProducts: response?.data?.total,
  };
}

export const getNewArrivals = createAsyncThunk(
  "product/getNewArrivals",
  async (
    { skip, limit }: { skip?: number; limit?: number },
    { rejectWithValue }
  ) => {
    try {
      const { products, totalProducts } = await fetchNewArrivals(skip, limit);

      return { products, totalProducts };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load products"
      );
    }
  }
);

interface NewArrivalsState {
  products: Product[];
  totalProducts: number | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NewArrivalsState = {
  products: [],
  totalProducts: null,
  status: "idle",
  error: null,
};

const newArrivalsSlice = createSlice({
  name: "newArrivals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewArrivals.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getNewArrivals.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload.products;
        state.totalProducts = payload.totalProducts;
      })
      .addCase(getNewArrivals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectNewArrivals = (state: RootState) => state.newArrivals;

export default newArrivalsSlice.reducer;
