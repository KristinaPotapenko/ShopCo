import Link from "next/link";

import IconButton from "@/components/ui/IconButton/IconButton";
import NavLink from "@/components/ui/NavLink/NavLink";
import Input from "@/components/ui/Input/Input";

import {
  AlignJustify as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as CardIcon,
  CircleUserRound as ProfileIcon,
  ChevronDown as ArrowIcon,
} from "lucide-react";

export default function Header() {
  return (
    <div className="container flex justify-between flex-wrap sm:flex-nowrap lg:gap-10 py-5 px-4 mx-auto my-0">
      <div className="flex items-center gap-4 lg:gap-10">
        <IconButton className="lg:hidden cursor-pointer">
          <MenuIcon className="w-6 h-6" strokeWidth={2.5} />
        </IconButton>
        <Link
          href="/"
          className="relative font-montserrat text-2xl font-extrabold outline-none 
             after:block after:h-0.5 after:w-0 after:bg-black after:absolute after:-bottom-1 after:left-0
             hover:after:w-full focus:after:w-full
             after:transition-width after:duration-300 after:ease-in-out"
        >
          SHOP.CO
        </Link>
        <ul className="hidden lg:flex lg:items-center lg:gap-6">
          <li className="flex items-center gap-1.5 cursor-pointer">
            <NavLink href="/">Shop</NavLink>
            <ArrowIcon className="w-5 h-5" />
          </li>
          <li>
            <NavLink href="/">On Sale</NavLink>
          </li>
          <li>
            <NavLink href="/">New Arrivals</NavLink>
          </li>
          <li>
            <NavLink href="/">Brand</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-2 lg:w-full">
        <div className="relative lg:flex-1 lg:mr-8 max-w-sm">
          <div className="hidden relative lg:block">
            <label htmlFor="serch" className="sr-only">
              Search products
            </label>
            <Input
              id="search"
              type="text"
              placeholder="Search for products..."
            />
            <SearchIcon
              className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-400"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex lg:hidden">
            <IconButton href="/">
              <SearchIcon className="w-6 h-6" strokeWidth={2.5} />
            </IconButton>
          </div>
        </div>
        <IconButton href="/">
          <CardIcon className="w-6 h-6" strokeWidth={2.5} />
        </IconButton>
        <IconButton href="/">
          <ProfileIcon className="w-6 h-6" strokeWidth={2.5} />
        </IconButton>
      </div>
    </div>
  );
}
