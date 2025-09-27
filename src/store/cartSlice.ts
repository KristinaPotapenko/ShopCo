import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "./store";

import { API_BASE } from "@/constants/constance";
import { CartItem } from "@/types/cart";

const fetchCartData = async (userId: number): Promise<CartItem[]> => {
  const response = await axios.get(`${API_BASE}/carts/${userId}`);

  return response.data.products;
};

export const getCart = createAsyncThunk(
  "/cart/getCart",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await fetchCartData(userId);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load cart"
      );
    }
  }
);

interface CartState {
  cart: CartItem[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cart = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.cart = payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { resetCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
