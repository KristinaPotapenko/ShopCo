import Logo from "@/components/ui/Logo/Logo";
import IconButton from "@/components/ui/IconButton/IconButton";
import Input from "@/components/ui/Input/Input";

import {
  AlignJustify as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as CardIcon,
  CircleUserRound as ProfileIcon,
} from "lucide-react";
import Navigation from "@/components/ui/Navigation/Navigation";

export default function Header() {
  return (
    <div className="container flex justify-between flex-wrap sm:flex-nowrap lg:gap-10 py-5 px-4 mx-auto my-0">
      <div className="flex items-center gap-4 lg:gap-10">
        <IconButton className="lg:hidden cursor-pointer">
          <MenuIcon className="w-6 h-6" strokeWidth={2.5} />
        </IconButton>
        <Logo className="text-2xl" />
        <Navigation />
      </div>
      <div className="flex items-center justify-end gap-2 lg:w-full">
        <div className="relative lg:flex-1 lg:mr-2 max-w-sm">
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
