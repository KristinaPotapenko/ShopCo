import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";
import { API_BASE } from "@/constants/constance";
import { Product } from "@/types/product";

async function fetchNewArrivals(limit: number = 4): Promise<Product[]> {
  const response = await axios.get(
    `${API_BASE}/products?limit=${limit}&select=title,price,discountPercentage,rating,images`
  );

  return response.data.products;
}

export const getNewArrivals = createAsyncThunk(
  "product/getNewArrivals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchNewArrivals();

      return response.map((product) => ({
        id: product?.id,
        title: product?.title,
        price: product?.price ? +product.price.toFixed(2) : null,
        discountPercentage: product?.discountPercentage
          ? +product.discountPercentage.toFixed(1)
          : null,
        rating: product?.rating ? +product.rating.toFixed(1) : null,
        images: product?.images ?? [],
      }));
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load products"
      );
    }
  }
);

interface NewArrivalsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NewArrivalsState = {
  products: [],
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
        state.products = payload;
      })
      .addCase(getNewArrivals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectNewArrivals = (state: RootState) => state.newArrivals;

export default newArrivalsSlice.reducer;
