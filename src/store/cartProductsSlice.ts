import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

import { API_BASE } from "@/constants/constance";
import { Product } from "@/types/product";

export const getProductsByIds = createAsyncThunk(
  "products/getByIds",
  async (ids: number[]) => {
    const responses = await Promise.all(
      ids.map((id) => fetch(`${API_BASE}/${id}`).then((r) => r.json()))
    );
    return responses;
  }
);

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState: {
    items: [] as Product[],
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByIds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsByIds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
  },
});

export const selectCartProducts = (state: RootState) => state.cartProducts;

export default cartProductsSlice.reducer;
