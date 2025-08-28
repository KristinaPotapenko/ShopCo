import { Product } from "@/types/product";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ProductCard from "@/components/ui/cards/ProductCard/ProductCard";
import ViewAllButton from "@/components/ui/ViewAllButton/ViewAllButton";

const products: Product[] = [
  {
    id: 1,
    image: "/newArrivals/NewArrivals_01.jpg",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 4.5,
    price: 120,
  },
  {
    id: 2,
    image: "/newArrivals/NewArrivals_02.jpg",
    title: "SKINNY FIT JEANS",
    rating: 3.5,
    price: 240,
    oldPrice: 260,
    discountPercentage: 20,
  },
  {
    id: 3,
    image: "/newArrivals/NewArrivals_03.jpg",
    title: "CHECKERED SHIRT",
    rating: 4.5,
    price: 180,
  },
  {
    id: 4,
    image: "/newArrivals/NewArrivals_04.jpg",
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    oldPrice: 160,
    discountPercentage: 30,
  },
];

export default function NewArrivals() {
  return (
    <section className="container flex flex-col lg:items-center mx-auto py-16 px-4 border-b border-zinc-200">
      <SectionTitle>NEW ARRIVALS</SectionTitle>
      <ul className="flex justify-between gap-6 w-full mb-10 md:mb-14 overflow-x-auto">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating}
              price={product.price}
              oldPrice={product?.oldPrice}
              discountPercentage={product?.discountPercentage}
            />
          );
        })}
      </ul>
      <ViewAllButton />
    </section>
  );
}
