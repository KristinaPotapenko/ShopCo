import Link from "next/link";

interface IconButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function IconButton({
  href,
  onClick,
  children,
  className,
}: IconButtonProps) {
  const baseClasses =
    "p-2 rounded-full hover:text-zinc-400 hover:bg-zinc-100 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 focus:text-zinc-400 " +
    "transition-colors duration-200 " +
    className;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
