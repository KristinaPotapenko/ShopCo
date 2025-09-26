import { configureStore } from "@reduxjs/toolkit";

import newArrivalsReducer from "./product/newArrivalsSlice";
import bestsellersReducer from "./product/bestsellersSlice";
import categoriesReducer from "./categoriesSlice";
import commentsReducer from "./commentsSlice";
import productSlice from "./product/productSlice";
import productsSlice from "./product/productsSlice";
import loginSlice from "./auth/loginSlice";
import userSlice from "./userSlice";
import cardSlice from "./cardSlice";
import cartProductsSlice from "./cartProductsSlice";

export const store = configureStore({
  reducer: {
    newArrivals: newArrivalsReducer,
    bestsellers: bestsellersReducer,
    categories: categoriesReducer,
    comments: commentsReducer,
    product: productSlice,
    products: productsSlice,
    login: loginSlice,
    user: userSlice,
    card: cardSlice,
    cartProducts: cartProductsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
