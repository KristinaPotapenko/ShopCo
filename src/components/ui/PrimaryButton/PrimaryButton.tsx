import Link from "next/link";

interface PrimaryButtonProps {
  className: string;
}

export default function PrimaryButton({ className }: PrimaryButtonProps) {
  return (
    <Link
      className={
        "flex items-center justify-center py-4 px-16 text-white font-semibold bg-black rounded-[60px] " +
        "transition-all duration-200 " +
        "hover:bg-zinc-800 " +
        "active:scale-95 active:bg-zinc-900 " +
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black " +
        className
      }
      href="/"
    >
      Shop Now
    </Link>
  );
}
