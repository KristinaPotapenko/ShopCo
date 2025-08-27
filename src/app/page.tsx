import Hero from "@/components/sections/Hero/Hero";
import Partners from "@/components/sections/Partners/Partners";
import NewArrivals from "@/components/sections/NewArrivals/NewArrivals";
import Bestsellers from "@/components/sections/Bestsellers/Bestsellers";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <NewArrivals />
      <Bestsellers />
    </main>
  );
}
