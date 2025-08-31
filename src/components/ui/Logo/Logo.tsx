import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={
        "relative font-montserrat font-extrabold outline-none " +
        "after:block after:h-0.5 after:w-0 after:bg-black after:absolute after:-bottom-1 after:left-0 " +
        "hover:after:w-full focus:after:w-full " +
        "after:transition-width after:duration-300 after:ease-in-out " +
        className
      }
    >
      SHOP.CO
    </Link>
  );
}
