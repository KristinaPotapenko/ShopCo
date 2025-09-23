import Link from "next/link";

import { Products } from "@/components/sections/Products/Products";
import Newsletter from "@/components/sections/Newsletter/Newsletter";

import { ChevronDown as ArrowIcon } from "lucide-react";

interface CategoriesPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoriesPageProps) {
  const { category } = await params;

  return (
    <>
      <nav className="container px-4 mx-auto pb-9">
        <div className="pt-6 border-t border-zinc-200">
          <ul className="flex items-center gap-3">
            <li className="flex items-center gap-3">
              <Link className="text-black/60 font-normal" href="/">
                Home
              </Link>
              <ArrowIcon className="w-4 text-black/60 rotate-[-90deg]" />
            </li>
            <li>
              <Link className="font-normal" href={`/category/${category}`}>
                {category[0].toUpperCase() + category.slice(1)}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Products type="category" category={category} />
      <Newsletter />
    </>
  );
}
