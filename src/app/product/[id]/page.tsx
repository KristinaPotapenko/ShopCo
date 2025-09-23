import Link from "next/link";

import Newsletter from "@/components/sections/Newsletter/Newsletter";
import { Product } from "@/components/pages/Product";

import { ChevronDown as ArrowIcon } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: number }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <>
      <nav className="container px-4 mx-auto pb-9">
        <div className="pt-6 border-t border-zinc-200">
          <ul className="flex items-center gap-3">
            <li className="flex items-center gap-3">
              <Link className="text-black/60 font-normal" href="/">
                Home
              </Link>
              <ArrowIcon className="w-4 text-black/60" />
            </li>
            <li className="flex items-center gap-3">
              <Link className="text-black/60 font-normal" href="/shop">
                Shop
              </Link>
              <ArrowIcon className="w-4 text-black/60" />
            </li>
            <li className="flex items-center gap-3">
              <Link className="text-black/60 font-normal" href="/shop/men">
                Men
              </Link>
              <ArrowIcon className="w-4 text-black/60" />
            </li>
            <li>
              <Link className="font-normal" href={`/product/${id}`}>
                T-shirts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Product id={id} />
      <Newsletter />
    </>
  );
}
