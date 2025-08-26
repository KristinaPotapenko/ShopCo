import Image from "next/image";

import HeroStatistics from "./HeroStatistics/HeroStatistics";
import HeroInfo from "./HeroInfo/HeroInfo";

export default function Hero() {
  return (
    <div className="pt-10 bg-[#F2F0F1]">
      <section className="container flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 px-4 mx-auto my-0">
        <div className="flex flex-col md:items-start gap-6 md:gap-8">
          <HeroInfo />
          <HeroStatistics />
        </div>
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image
            src="/hero-models.jpg"
            alt="Fashionable man and woman showcasing modern clothing"
            fill
            className="object-cover object-top"
          />
        </div>
      </section>
    </div>
  );
}
