import Input from "../Input/Input";
import IconButton from "../IconButton/IconButton";

import { Search as SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative lg:flex-1 lg:mr-2 max-w-sm">
      <div className="hidden relative lg:block">
        <label htmlFor="serch" className="sr-only">
          Search products
        </label>
        <Input id="search" type="text" placeholder="Search for products..." />
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
  );
}
