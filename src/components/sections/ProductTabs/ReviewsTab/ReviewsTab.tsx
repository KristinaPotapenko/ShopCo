import { Product } from "@/types/product";

import ReviewCard from "@/components/ui/cards/ReviewCard/ReviewCard";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import ViewAllButton from "@/components/ui/ViewAllButton/ViewAllButton";

import { ChevronDown as ArrowIcon, SlidersVertical } from "lucide-react";

interface ReviewsTabProps {
  product: Product | null | undefined;
}

export const ReviewsTab = ({ product }: ReviewsTabProps) => {
  return (
    <div>
      <div className="py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            <p className="text-xl lg:text-2xl font-semibold">All Reviews</p>
            <p className="self-end font-normal text-black/60">
              ({product?.reviews.length})
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="p-3 lg:p-4 bg-zinc-100 rounded-full">
              <SlidersVertical
                className="w-4 h-4 lg:w-6 lg:h-6 text-black"
                strokeWidth={2.5}
              />
            </button>
            <div className="relative inline-block">
              <select
                className="py-3 pl-3 pr-12 lg:py-4 lg:pl-4 lg:pr-14 font-semibold bg-zinc-100 rounded-full appearance-none"
                name="filter"
              >
                <option>Latest</option>
                <option>Latest</option>
                <option>Latest</option>
              </select>

              <ArrowIcon className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
            </div>
            <PrimaryButton>Write a Review</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full xl:w-4/5">
          {product?.reviews.map((review, index) => {
            return (
              <ReviewCard
                key={index}
                rating={+review.rating}
                name={review.reviewerName}
                review={review.comment}
                date={review.date}
                showActions={true}
              />
            );
          })}
        </ul>
        {product?.reviews && product?.reviews.length > 6 ? (
          <ViewAllButton href="/product/reviews">
            Load More Reviews
          </ViewAllButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
