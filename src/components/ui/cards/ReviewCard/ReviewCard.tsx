import Star from "../../Star/Star";

import { Check } from "lucide-react";

interface ReviewCardProps {
  rating: number;
  name: string;
  review: string;
}

export default function ReviewCard({ rating, name, review }: ReviewCardProps) {
  return (
    <li className="min-w-full lg:min-w-[auto] lg:flex-[0_0_calc(33.333%_-_16px)] p-6 lg:py-7 lg:px-8 border border-zinc-200 rounded-3xl snap-start">
      <ul className="flex gap-1.5 mb-3 lg:mb-3.5">
        <li>
          <Star />
        </li>
        <li>
          <Star />
        </li>
        <li>
          <Star />
        </li>
        <li>
          <Star />
        </li>
        <li>
          <Star />
        </li>
      </ul>
      <div className="flex items-center gap-1.5 lg:gap-3 lg:mb-3">
        <h3 className="text-base lg:text-xl font-semibold">{name}</h3>
        <Check
          className="w-5 h-5 p-1 text-white bg-green-600 rounded-full"
          strokeWidth={3}
        />
      </div>
      <p className="font-normal text-zinc-400">
        <q>{review}</q>
      </p>
    </li>
  );
}
