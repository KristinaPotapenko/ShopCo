import { useState } from "react";

import { Product } from "@/types/product";

import { ProductDetailsTab } from "./ProductDetailsTab/ProductDetailsTab";
import { ReviewsTab } from "./ReviewsTab/ReviewsTab";
import { FAQsTab } from "./FAQsTab/FAQsTab";

const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

interface ProductTabsProps {
  product: Product | null | undefined;
}

export const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className="container px-4 mx-auto">
      <ul className="container flex justify-between gap-2 lg:gap-4 pb-5 lg:pb-6 text-xl font-normal text-center text-black/60 border-b-2 border-zinc-200 ">
        {tabs.map((tab, index) => {
          return (
            <li
              className={`relative basis-2/6 cursor-pointer ${
                activeTab === index ? "text-black" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              <button className="text-base lg:text-xl cursor-pointer">
                {tab}
              </button>
              {activeTab === index ? (
                <span className="absolute bottom-[-22px] lg:bottom-[-26px] left-0 w-full h-[2px] bg-black" />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
      {activeTab === 0 && <ProductDetailsTab product={product} />}
      {activeTab === 1 && <ReviewsTab product={product} />}
      {activeTab === 2 && <FAQsTab />}
    </section>
  );
};
