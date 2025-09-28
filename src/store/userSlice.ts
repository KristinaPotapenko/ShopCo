import { API_BASE } from "@/constants/constance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { RootState } from "./store";
import { User } from "@/types/user";

const fetchUserInformation = async (): Promise<User> => {
  const accessToken = Cookies.get("accessToken");

  const response = await axios.get(`${API_BASE}/user/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const getUserInformation = createAsyncThunk(
  "/user/getUserInformation",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserInformation();

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load user"
      );
    }
  }
);

interface UserState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserInformation: (state) => {
      state.status = "idle";
      state.error = null;
      state.user = null;

      Cookies.remove("userId");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInformation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserInformation.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.user = payload;
      })
      .addCase(getUserInformation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { resetUserInformation } = userSlice.actions;

export const selectUserInformation = (state: RootState) => state.user;

export default userSlice.reducer;
