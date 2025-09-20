import { Product } from "@/types/product";

import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

interface ProductDetailsTabProps {
  product: Product | null | undefined;
}

export const ProductDetailsTab = ({ product }: ProductDetailsTabProps) => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-black/80 mb-4">
              Product Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="text-black/60">Brand</span>
                <span className="font-medium">{product?.brand}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="text-black/60">SKU</span>
                <span className="font-medium">{product?.sku}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="text-black/60">Category</span>
                <span className="font-medium capitalize">
                  {product?.category?.replace("-", " ")}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="text-black/60">Weight</span>
                <span className="font-medium">{product?.weight} kg</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-black/80 mb-4">
              Stock & Availability
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="text-black/60">Availability</span>
                <span
                  className={`font-medium ${
                    product?.availabilityStatus === "Low Stock"
                      ? "text-amber-500"
                      : "text-green-500"
                  }`}
                >
                  {product?.availabilityStatus}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="text-black/60">Stock</span>
                <span className="font-medium">{product?.stock} units</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-200">
                <span className="text-black/60">Min Order</span>
                <span className="font-medium">
                  {product?.minimumOrderQuantity} units
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-black/80 mb-4">
            Shipping & Returns
          </h3>
          <div className="space-y-3">
            <div className="py-3 border-b border-zinc-200">
              <p className="text-black/60 mb-2">Shipping Information</p>
              <p className="font-medium">{product?.shippingInformation}</p>
            </div>
            <div className="py-3 border-b border-zinc-200">
              <p className="text-black/60 mb-2">Return Policy</p>
              <p className="font-medium">{product?.returnPolicy}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-black/80 mb-4">Warranty</h3>
          <div className="py-3 border-b border-zinc-200">
            <p className="font-medium">{product?.warrantyInformation}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-black/80 mb-4">
          Additional Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-zinc-200">
              <span className="text-black/60">Barcode</span>
              <span className="font-medium">{product?.meta?.barcode}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-zinc-200">
              <span className="text-black/60">Created</span>
              <span className="font-medium">
                {new Date(product?.meta?.createdAt || "").toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-zinc-200">
              <span className="text-black/60">Updated</span>
              <span className="font-medium">
                {new Date(product?.meta?.updatedAt || "").toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-zinc-200">
              <span className="text-black/60">QR Code</span>
              <span className="font-medium text-blue-500 cursor-pointer hover:underline">
                View QR
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6">
        <PrimaryButton className="w-full md:w-auto">
          Download Product Specs
        </PrimaryButton>
      </div>
    </div>
  );
};
