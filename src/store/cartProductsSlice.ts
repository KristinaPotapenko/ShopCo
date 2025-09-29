import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

import { API_BASE } from "@/constants/constance";
import { Product } from "@/types/product";

export const getProductsByIds = createAsyncThunk(
  "products/getProductsByIds",
  async (ids: number[], { rejectWithValue }) => {
    try {
      const responses = await Promise.all(
        ids.map((id) =>
          fetch(`${API_BASE}/products/${id}`).then((r) => r.json())
        )
      );

      return responses;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load cart"
      );
    }
  }
);

interface CartProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CartProductsState = {
  products: [],
  status: "idle",
  error: null,
};

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByIds.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProductsByIds.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload;
      })
      .addCase(getProductsByIds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectCartProducts = (state: RootState) => state.cartProducts;

export default cartProductsSlice.reducer;
