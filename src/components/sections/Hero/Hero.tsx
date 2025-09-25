"use client";

import { useState } from "react";
import Image from "next/image";

import HeroStatistics from "./HeroStatistics/HeroStatistics";
import HeroInfo from "./HeroInfo/HeroInfo";

export default function Hero() {
  const [loadedImage, setLoadedImage] = useState(false);

  return (
    <div className="pt-10 bg-[#F2F0F1]">
      <section className="container flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 px-4 mx-auto my-0">
        <div className="flex flex-col md:items-start gap-6 md:gap-8">
          <HeroInfo />
          <HeroStatistics />
        </div>
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          {!loadedImage && (
            <>
              <div className="absolute inset-0 rounded-xl bg-gray-50">
                <div className="absolute inset-9 rounded-lg bg-[#F2F0F1]" />
                <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/100 via-30% to-transparent super-glow-effect" />
              </div>
            </>
          )}
          <Image
            src="/hero-models.jpg"
            alt="Fashionable man and woman showcasing modern clothing"
            fill
            priority
            className={`object-cover object-top transition-opacity duration-500 ${
              loadedImage ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 40vw"
            onLoad={() => setLoadedImage(true)}
          />
        </div>
      </section>
    </div>
  );
}
