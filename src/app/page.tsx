import Hero from "@/components/sections/Hero/Hero";
import Partners from "@/components/sections/Partners/Partners";
import NewArrivals from "@/components/sections/NewArrivals/NewArrivals";
import Bestsellers from "@/components/sections/Bestsellers/Bestsellers";
import Styles from "@/components/sections/Styles/Styles";
import Newsletter from "@/components/sections/Newsletter/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <NewArrivals />
      <Bestsellers />
      <Styles />
      <Newsletter />
    </main>
  );
}
