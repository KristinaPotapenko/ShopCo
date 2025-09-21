import Link from "next/link";
import clsx from "clsx";

interface PrimaryButtonProps {
  type?: "button";
  onClick?: () => void;
  className?: string;
  variant?: "black" | "blue";
  children: React.ReactNode;
}

export default function PrimaryButton({
  type,
  onClick,
  className,
  variant = "black",
  children,
}: PrimaryButtonProps) {
  const baseStyle =
    "flex items-center justify-center py-3 lg:py-4 px-16 font-semibold rounded-[60px] cursor-pointer transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    black:
      "bg-black text-white hover:bg-zinc-800 active:bg-zinc-900 focus:ring-black",
    blue: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500",
  };

  const finalClass = clsx(baseStyle, variants[variant], className);

  if (type === "button") {
    return (
      <button className={finalClass} type="button" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link className={finalClass} href="/">
      {children}
    </Link>
  );
}
