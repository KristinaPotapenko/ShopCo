import React from "react";

import { ChevronRight as Arrow } from "lucide-react";

interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isReversed?: boolean;
  children: React.ReactNode;
}

export const PaginationButton = ({
  onClick,
  isReversed,
  children,
  ...props
}: PaginationButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 py-2 px-3.5 font-semibold text-black border border-black/10 rounded-lg hover:bg-zinc-100 cursor-pointer disabled:text-black/10 disabled:cursor-not-allowed"
      {...props}
    >
      <Arrow className={`w-5 h-5 text-current ${isReversed && "rotate-180"}`} />
      {children}
    </button>
  );
};
