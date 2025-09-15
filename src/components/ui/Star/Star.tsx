import { Star as StarIcon } from "lucide-react";

interface StarProps {
  isGray?: boolean;
}

export default function Star({ isGray }: StarProps) {
  return (
    <StarIcon
      className={`w-6 h-6 text-transparent ${
        isGray ? "fill-zinc-200" : "fill-amber-300"
      }`}
    />
  );
}
