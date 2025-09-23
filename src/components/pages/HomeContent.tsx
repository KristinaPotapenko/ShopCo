import Hero from "@/components/sections/Hero/Hero";
import Partners from "@/components/sections/Partners/Partners";
import NewArrivals from "@/components/sections/NewArrivals/NewArrivals";
import Bestsellers from "@/components/sections/Bestsellers/Bestsellers";
import Categories from "@/components/sections/Categories/Categories";
import Customers from "@/components/sections/Customers/Customers";
import Newsletter from "@/components/sections/Newsletter/Newsletter";

export default function HomeContent() {
  return (
    <>
      <Hero />
      <Partners />
      <NewArrivals />
      <Bestsellers />
      <Categories />
      <Customers />
      <Newsletter />
    </>
  );
}
