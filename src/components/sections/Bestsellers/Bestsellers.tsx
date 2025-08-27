import { Product } from "@/types/product";

import ProductCard from "@/components/ui/ProductCard/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ViewAllButton from "@/components/ui/ViewAllButton/ViewAllButton";

const bestsellers: Product[] = [
  {
    id: 1,
    image: "/bestsellers/bestseller_01.jpg",
    title: "VERTICAL STRIPED SHIRT",
    rating: 4.5,
    price: 120,
    oldPrice: 232,
    discountPercentage: 20,
  },
  {
    id: 2,
    image: "/bestsellers/bestseller_02.jpg",
    title: "COURAGE GRAPHIC T-SHIRT",
    rating: 4.0,
    price: 145,
  },
  {
    id: 3,
    image: "/bestsellers/bestseller_03.jpg",
    title: "LOOSE FIT BERMUDA SHORTS",
    rating: 3.0,
    price: 80,
  },
  {
    id: 4,
    image: "/bestsellers/bestseller_04.jpg",
    title: "FADED SKINNY JEANS",
    rating: 4.5,
    price: 210,
  },
];

export default function Bestsellers() {
  return (
    <section className="container flex flex-col lg:items-center mx-auto py-16 px-4">
      <SectionTitle>top selling</SectionTitle>
      <ul className="flex justify-between gap-6 w-full mb-10 md:mb-14 overflow-x-auto">
        {bestsellers.map((bestseller) => {
          return (
            <ProductCard
              key={bestseller.id}
              image={bestseller.image}
              title={bestseller.title}
              rating={bestseller.rating}
              price={bestseller.price}
              oldPrice={bestseller?.oldPrice}
              discountPercentage={bestseller?.discountPercentage}
            />
          );
        })}
      </ul>
      <ViewAllButton />
    </section>
  );
}
