import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API_BASE } from "@/constants/constance";

import { RootState } from "./store";

const fetchCategoriesList = async (): Promise<string[]> => {
  const response = await axios.get(`${API_BASE}/products/category-list`);

  return response.data;
};

export const getCategoriesList = createAsyncThunk(
  "getCategoriesList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCategoriesList();

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load categories"
      );
    }
  }
);

interface CategoriesState {
  categories: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  status: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesList.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCategoriesList.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.categories = payload;
      })
      .addCase(getCategoriesList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
