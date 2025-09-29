import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

import { API_BASE } from "@/constants/constance";
import { Product } from "@/types/product";

export const productsSearch = createAsyncThunk(
  "productsSearch/productsSearch",
  async (query: string, { rejectWithValue }) => {
    console.log(query);

    try {
      const response = await axios.get(
        `${API_BASE}/products/search?q=${query}&limit=10`
      );
      console.log(response);

      return response.data.products;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load cart"
      );
    }
  }
);

interface productsSearchState {
  products: Product[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: productsSearchState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSearchSlice = createSlice({
  name: "productsSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsSearch.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(productsSearch.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload;
      })
      .addCase(productsSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectProductsSearch = (state: RootState) => state.productsSearch;

export default productsSearchSlice.reducer;
