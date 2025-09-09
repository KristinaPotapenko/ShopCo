import { configureStore } from "@reduxjs/toolkit";

import newArrivalsReducer from "./product/newArrivalsSlice";
import bestsellersReducer from "./product/bestsellersSlice";

export const store = configureStore({
  reducer: {
    newArrivals: newArrivalsReducer,
    bestsellers: bestsellersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
