import { useState } from "react";

import { CartItem } from "@/types/cart";

import Input from "@/components/ui/Input/Input";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

import { ArrowRight, Tag } from "lucide-react";

interface OrderSummaryProps {
  cart: CartItem[] | null;
}

export const OrderSummary = ({ cart }: OrderSummaryProps) => {
  const [promoCode, setPromoCode] = useState("");
  const [statusPromoCode, setStatusPromoCode] = useState<boolean | null>(null);

  const subtotal = cart
    ? cart.reduce((accumulator, product) => {
        return accumulator + product.total;
      }, 0)
    : 0;
  const discountPercentage = cart
    ? cart.reduce((accumulator, product) => {
        return accumulator + product.discountPercentage;
      }, 0)
    : 0;
  const discountedTotal = cart
    ? cart.reduce((accumulator, product) => {
        return accumulator + (product.total - product.discountedTotal);
      }, 0)
    : 0;

  return (
    <div className="flex flex-col py-5 px-5 lg:px-6 border border-black/10 rounded-3xl">
      <h2 className="mb-4 lg:mb-6 text-xl lg:text-2xl font-bold text-black">
        Order Summary
      </h2>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4 lg:mb-5 text-xl text-semibold text-zinc-500">
        <p>Subtotal</p>
        <p className="font-bold text-black">${subtotal.toFixed()}</p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4 lg:mb-5 text-xl text-semibold text-zinc-500">
        <p>Discount ({`-${discountPercentage?.toFixed()}%`})</p>
        <p className="font-bold text-red-600">-${discountedTotal.toFixed()}</p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4 lg:mb-5 text-xl text-semibold text-zinc-500">
        <p>Delivery Fee</p>
        <p className="font-bold text-black">$15</p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4 pt-5 mb-5 lg:mb-6 text-2xl text-bold text-black border-t border-black/10">
        <p>Total</p>
        <p className="font-bold">
          ${(subtotal - discountedTotal + 15).toFixed()}
        </p>
      </div>
      <div className="flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-4 mb-5 lg:mb-6">
        <div className="relative flex-1 w-full min-w-52">
          <label htmlFor="serch" className="sr-only">
            Add promo code
          </label>
          <Input
            id="promocode"
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPromoCode(e.target.value)
            }
          />
          <Tag
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-400"
            strokeWidth={2.5}
          />
        </div>
        <PrimaryButton
          onClick={() => {
            if (promoCode.length > 4 && promoCode.length < 8) {
              setStatusPromoCode(true);
            } else {
              setStatusPromoCode(false);
            }
          }}
        >
          Apply
        </PrimaryButton>
      </div>
      {statusPromoCode !== null && (
        <p
          className={`text-xl font-semibold ${
            statusPromoCode ? "text-zinc-500" : "text-red-600"
          } mb-6`}
        >
          {statusPromoCode
            ? "Promo code applied successfully!"
            : "Invalid or expired promo code"}
        </p>
      )}
      <PrimaryButton>
        Go to Checkout <ArrowRight />
      </PrimaryButton>
    </div>
  );
};
