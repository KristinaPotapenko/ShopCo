import { QuantitySelector } from "./QuantitySelector";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Product } from "@/types/product";

interface QuantitySelectorGroupProps {
  product: Product | null | undefined;
}

export const QuantitySelectorGroup = ({
  product,
}: QuantitySelectorGroupProps) => {
  return (
    <div className="flex gap-3 lg:gap-5 w-full py-6">
      <QuantitySelector product={product} />
      <PrimaryButton className="grow" type="button">
        Add to Cart
      </PrimaryButton>
    </div>
  );
};
