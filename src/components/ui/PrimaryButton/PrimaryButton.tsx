import { ButtonHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";

type Variant = "black" | "blue" | "outline";

interface BaseProps {
  className?: string;
  variant?: Variant;
  children: React.ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = BaseProps &
  LinkProps & {
    href: string;
  };

type PrimaryButtonProps = ButtonProps | AnchorProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { className, variant = "black", children } = props;

  const baseStyle =
    "flex items-center justify-center py-3 lg:py-4 px-16 font-semibold rounded-[60px] cursor-pointer transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    black:
      "bg-black text-white hover:bg-zinc-800 active:bg-zinc-900 focus:ring-black",
    blue: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500",
    outline:
      "bg-white text-black border border-black hover:bg-zinc-50 active:bg-zinc-100 focus:ring-black",
  };

  const finalClass = clsx(baseStyle, variants[variant], className);

  if ("href" in props) {
    return (
      <Link {...props} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={finalClass}>
      {children}
    </button>
  );
}
