import Stars from "../../Stars/Stars";

import { Check, Ellipsis as MoreIcon } from "lucide-react";

interface ReviewCardProps {
  rating: number;
  name: string;
  review: string;
  date?: string | Date;
  showActions?: boolean;
}

export default function ReviewCard({
  rating,
  name,
  review,
  date,
  showActions = false,
}: ReviewCardProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <li className="relative flex flex-col min-w-full lg:min-w-[auto] lg:flex-[0_0_calc(33.333%_-_16px)] p-6 lg:py-7 lg:px-8 border border-zinc-200 rounded-3xl snap-start">
      {showActions && (
        <button className="absolute right-4 top-4 text-zinc-400 hover:text-black">
          <MoreIcon />
        </button>
      )}
      <Stars rating={rating} className="mb-3 lg:mb-3.5" />
      <div className="flex items-center gap-1.5 lg:gap-3 lg:mb-3">
        <h3 className="text-base lg:text-xl font-semibold">{name}</h3>
        <Check
          className="w-5 h-5 p-1 text-white bg-green-600 rounded-full"
          strokeWidth={3}
        />
      </div>
      <p
        className={`flex-grow font-normal text-zinc-400 ${
          showActions ? "mb-6" : ""
        }`}
      >
        <q>{review}</q>
      </p>
      <p className="font-normal text-black/60">Posted on {formattedDate}</p>
    </li>
  );
}
