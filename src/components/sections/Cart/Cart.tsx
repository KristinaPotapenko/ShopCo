"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getCart, selectCart } from "@/store/cartSlice";
import {
  getProductsByIds,
  selectCartProducts,
} from "@/store/cartProductsSlice";

import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

import { OrderSummary } from "./OrderSummary/OrderSummary";
import { CartItem } from "./CartItem/CartItem";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart, status } = useAppSelector(selectCart);
  const { products, status: statusProducts } =
    useAppSelector(selectCartProducts);

  const userId = Cookies.get("userId");

  useEffect(() => {
    if (userId) {
      dispatch(getCart(+userId));
    }
  }, []);

  useEffect(() => {
    if (cart?.length) {
      const ids = cart.map((item) => item.id);
      dispatch(getProductsByIds(ids));
    }
  }, [cart]);

  if (status === "loading" || status === "idle") {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-40 h-40 border-4 border-t-transparent border-zinc-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-[60vh]">
        <p className="text-lg lg:text-2xl font-semibold text-black">
          Sorry, an unexpected error has occurred.
        </p>
        <PrimaryButton onClick={() => userId && dispatch(getCart(+userId))}>
          Try Again
        </PrimaryButton>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-8 text-center">
        <p className="text-lg lg:text-2xl font-semibold text-black">
          You are not logged in
        </p>
        <PrimaryButton href="/login">Go to Login</PrimaryButton>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 mb-16 lg:mb-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-black mb-5 lg:mb-6">
        Your cart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-start gap-5">
        <div className="w-full py-5 px-5 lg:px-6 border border-black/10 rounded-3xl">
          {(statusProducts === "idle" || statusProducts === "loading") && (
            <div className="flex items-center justify-center h-[60vh]">
              <div className="w-40 h-40 border-4 border-t-transparent border-zinc-300 rounded-full animate-spin"></div>
            </div>
          )}
          {statusProducts === "succeeded" && (
            <ul className="flex flex-col gap-4 lg:gap-6">
              {cart &&
                cart?.map((product, index) => {
                  return (
                    <CartItem
                      key={product.id}
                      products={products}
                      product={product}
                      index={index}
                      cartLength={cart.length}
                    />
                  );
                })}
            </ul>
          )}
          {statusProducts === "failed" && (
            <div className="flex flex-col items-center justify-center gap-4 h-[60vh]">
              <p className="text-ml lg:text-xl font-semibold text-black">
                Sorry, an unexpected error has occurred.
              </p>
              <PrimaryButton
                onClick={() => {
                  if (cart?.length) {
                    const ids = cart.map((item) => item.id);
                    dispatch(getProductsByIds(ids));
                  }
                }}
              >
                Try Again
              </PrimaryButton>
            </div>
          )}
        </div>
        <OrderSummary cart={cart} />
      </div>
    </section>
  );
};
