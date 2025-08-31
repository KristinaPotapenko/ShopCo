import NavLink from "../NavLink/NavLink";

import { ChevronDown as ArrowIcon } from "lucide-react";

export default function Navigation() {
  return (
    <nav>
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
    </nav>
  );
}
