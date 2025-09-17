import { API_BASE } from "@/constants/constance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./productSlice";
import { RootState } from "../store";

const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const response = await axios.get(`${API_BASE}/products/category/${category}`);

  return response?.data?.products;
};

export const getProductsByCategory = createAsyncThunk(
  "/product/getProductByCategory",
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await fetchProductsByCategory(category);

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
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: null,
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
        state.products = payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
