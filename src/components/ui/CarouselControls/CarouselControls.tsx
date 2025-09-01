import { ArrowLeft as Arrow } from "lucide-react";

interface CarouselControlsProps {
  currentSlide: number;
  totalSteps: number;
  scroll: (direction: "left" | "right") => void;
}

export default function CarouselControls({
  currentSlide,
  totalSteps,
  scroll,
}: CarouselControlsProps) {
  return (
    <ul className="flex gap-2">
      <li className="cursor-pointer">
        <button
          disabled={currentSlide === 0}
          className="p-1 rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 transition-colors duration-200 disabled:text-zinc-400"
          onClick={() => scroll("left")}
        >
          <Arrow className="w-6 h-6 cursor-pointer" />
        </button>
      </li>
      <li className="cursor-pointer">
        <button
          disabled={currentSlide === totalSteps - 1}
          className="p-1 rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 transition-colors duration-200 disabled:text-zinc-400"
          onClick={() => scroll("right")}
        >
          <Arrow className="w-6 h-6 rotate-180 cursor-pointer" />
        </button>
      </li>
    </ul>
  );
}
