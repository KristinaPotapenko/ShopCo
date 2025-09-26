import { useState } from "react";
import Image from "next/image";

import { Product } from "@/types/product";
import { BASE_IMAGE } from "@/constants/constance";

interface ProductImagesProps {
  product: Product | null | undefined;
}

export const ProductImages = ({ product }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleSelectImage = (id: number) => {
    setSelectedImage(id);
  };

  return (
    <div className="flex flex-col-reverse items-center xl:items-start xl:flex-row shrink-0 gap-3 lg:gap-4">
      <div className="flex xl:flex-col gap-3 lg:gap-4 w-full h-full max-w-[500px] xl:max-h-[500px] pb-3 xl:pr-3 overflow-x-auto xl:overflow-y-auto">
        {product?.images.map((image, index) => {
          return (
            <Image
              key={index}
              className={`border border-zinc-200 rounded-3xl cursor-pointer ${
                selectedImage === index ? "border-zinc-400" : ""
              }`}
              src={image || BASE_IMAGE}
              alt="T-shirts"
              width={155}
              height={170}
              priority
              onClick={() => handleSelectImage(index)}
            />
          );
        })}
      </div>
      <Image
        className="border border-zinc-200 rounded-3xl"
        src={product?.images[selectedImage] || BASE_IMAGE}
        alt="T-shirts"
        width={450}
        height={540}
        priority
      />
    </div>
  );
};
