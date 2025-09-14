import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "./store";
import { API_BASE } from "@/constants/constance";
import { Comment } from "@/types/comment";

async function fetchComments(limit: number = 10): Promise<Comment[]> {
  const response = await axios.get(`${API_BASE}/comments?limit=${limit}`);

  return response.data.comments;
}

export const getComments = createAsyncThunk(
  "/comments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchComments();

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load comments"
      );
    }
  }
);

interface CommentsState {
  comments: Comment[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  status: "idle",
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.comments = payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectComments = (state: RootState) => state.comments;

export default commentsSlice.reducer;
