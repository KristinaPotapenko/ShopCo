import { configureStore } from "@reduxjs/toolkit";

import newArrivalsReducer from "./product/newArrivalsSlice";

export const store = configureStore({
  reducer: {
    newArrivals: newArrivalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
