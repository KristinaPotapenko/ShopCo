import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { RootState } from "../store";
import { API_BASE } from "@/constants/constance";

import { LoginInformation } from "@/types/loginInformation";

interface LoginCredentials {
  username: string;
  password: string;
}

const fetchLoginUser = async (
  username: string,
  password: string
): Promise<LoginInformation> => {
  const response = await axios.post(`${API_BASE}/user/login`, {
    username,
    password,
    expiresInMins: 30,
  });

  return response.data;
};

export const loginUser = createAsyncThunk(
  "/login",
  async ({ username, password }: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await fetchLoginUser(username, password);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to load user"
      );
    }
  }
);

interface LoginState {
  loginInformation: LoginInformation | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LoginState = {
  loginInformation: null,
  status: "idle",
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetLoginState: (state) => {
      state.status = "idle";
      state.error = null;
      state.loginInformation = null;

      Cookies.remove("userId");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.loginInformation = payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { resetLoginState } = loginSlice.actions;

export const selectLoginInformation = (state: RootState) => state.login;

export default loginSlice.reducer;
