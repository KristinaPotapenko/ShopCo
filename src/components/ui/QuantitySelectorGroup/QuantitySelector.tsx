import { useState } from "react";

import { Product } from "@/types/product";

import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  product: Product | null | undefined;
  quantity?: number;
}

export const QuantitySelector = ({
  product,
  quantity,
}: QuantitySelectorProps) => {
  const [quantityProduct, setQuantityProduct] = useState<number>(quantity || 1);

  const updateQuantity = (quantity: number, type: "add" | "delete") => {
    if (type === "delete" && quantity > 1) {
      setQuantityProduct((prev) => prev - 1);
    } else if (type === "add" && product?.stock && quantity < product?.stock) {
      setQuantityProduct((prev) => prev + 1);
    }
  };
  return (
    <div className="flex items-center gap-9 py-4 px-5 font-normal bg-zinc-100 rounded-[60px]">
      <button
        className={`cursor-pointer ${
          quantityProduct === 1 ? "text-black/30" : ""
        }`}
        onClick={() => updateQuantity(quantityProduct, "delete")}
      >
        <Minus className="w-5 h-5" strokeWidth={2.5} />
      </button>
      <p>{quantityProduct}</p>
      <button
        className={`cursor-pointer ${
          quantityProduct === product?.stock ? "text-black/30" : ""
        }`}
        onClick={() => updateQuantity(quantityProduct, "add")}
      >
        <Plus className="w-5 h-5" strokeWidth={2.5} />
      </button>
    </div>
  );
};
