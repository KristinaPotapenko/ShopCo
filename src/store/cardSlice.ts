import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "./store";

import { API_BASE } from "@/constants/constance";

const fetchCardData = async (userId: number): Promise<CardItem[]> => {
  const response = await axios.get(`${API_BASE}/carts/${userId}`);

  return response.data.products;
};

export const getCard = createAsyncThunk(
  "/card/getCard",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await fetchCardData(userId);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load card"
      );
    }
  }
);

interface CardItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface CardState {
  card: CardItem[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CardState = {
  card: null,
  status: "idle",
  error: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    resetCard: (state) => {
      state.card = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCard.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.card = payload;
      })
      .addCase(getCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { resetCard } = cardSlice.actions;

export const selectCard = (state: RootState) => state.card;

export default cardSlice.reducer;
