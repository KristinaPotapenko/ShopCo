import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";
import { API_BASE } from "@/constants/constance";

interface Review {
  rating: string;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmai: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

interface ProductState {
  product: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  status: "idle",
  error: null,
};

const fetchProduct = async (id: number): Promise<Product> => {
  const response = await axios.get(`${API_BASE}/products/${id}`);

  return response.data;
};

const fetchProductByCategory = async (category: string): Promise<Product> => {
  const response = await axios.get(`${API_BASE}/products/category/${category}`);

  return response.data;
};

export const getProduct = createAsyncThunk(
  "/product/getProduct",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetchProduct(id);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load product"
      );
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  "/product/getProductByCategory",
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await fetchProductByCategory(category);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load product"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.product = payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getProductByCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProductByCategory.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.product = payload;
      })
      .addCase(getProductByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
