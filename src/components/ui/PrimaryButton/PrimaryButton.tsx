import Link from "next/link";

interface PrimaryButtonProps {
  type?: "button";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  type,
  onClick,
  className,
  children,
}: PrimaryButtonProps) {
  const baseStyle =
    "flex items-center justify-center py-3 lg:py-4 px-16 text-white font-semibold bg-black rounded-[60px] " +
    "transition-all duration-200 " +
    "hover:bg-zinc-800 " +
    "active:scale-95 active:bg-zinc-900 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black " +
    className;

  if (type === "button") {
    return (
      <button className={baseStyle} type="button" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link className={baseStyle} href="/">
      {children}
    </Link>
  );
}
