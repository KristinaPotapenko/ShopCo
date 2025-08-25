import Link from "next/link";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative font-normal text-nowrap outline-none 
             before:absolute before:inset-0 before:w-0 before:bg-zinc-300/20 before:rounded-md before:origin-center
             hover:before:w-full focus:before:w-full
             hover:px-3 hover:py-2 focus:px-3 focus:py-2
             transition-all duration-600 ease-in-out"
    >
      {children}
    </Link>
  );
}
