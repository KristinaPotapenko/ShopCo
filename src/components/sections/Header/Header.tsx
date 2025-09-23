import Logo from "@/components/ui/Logo/Logo";
import IconButton from "@/components/ui/IconButton/IconButton";
import Navigation from "@/components/ui/Navigation/Navigation";
import SearchBar from "@/components/ui/SearchBar/SearchBar";

import {
  AlignJustify as MenuIcon,
  ShoppingCart as CardIcon,
  CircleUserRound as ProfileIcon,
} from "lucide-react";

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
        <SearchBar />
        <IconButton href="/card">
          <CardIcon className="w-6 h-6" strokeWidth={2.5} />
        </IconButton>
        <IconButton href="/profile">
          <ProfileIcon className="w-6 h-6" strokeWidth={2.5} />
        </IconButton>
      </div>
    </div>
  );
}
