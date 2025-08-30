"use client";

import { useEffect, useRef, useState } from "react";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ReviewCard from "@/components/ui/cards/ReviewCard/ReviewCard";

import { ArrowLeft as Arrow } from "lucide-react";

const reviews = [
  {
    id: 1,
    rating: 4.5,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    rating: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    rating: 3.5,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export default function Customers() {
  const listRef = useRef<HTMLUListElement>(null);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [totalSteps, setTotalSteps] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!listRef.current) return;

      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(1);
      }

      listRef.current.scrollTo({ left: 0, behavior: "auto" });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!listRef.current) return;

    const totalSlides = listRef.current.children.length;
    setTotalSteps(Math.ceil(totalSlides / visibleSlides));
    setCurrentSlide(0);

    listRef.current.scrollTo({ left: 0, behavior: "auto" });
  }, [visibleSlides, reviews]);

  const scroll = (direction: "left" | "right") => {
    if (!listRef?.current) return;

    const slideWidth = listRef.current.scrollWidth / reviews.length;
    const totalSlideWidth = visibleSlides === 1 ? slideWidth : slideWidth;

    const scrollAmount =
      direction === "left"
        ? -totalSlideWidth * visibleSlides
        : totalSlideWidth * visibleSlides;

    setCurrentSlide((prev) => (direction === "left" ? prev - 1 : prev + 1));

    listRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="flex items-center justify-between gap-4 mb-6 lg:mb-10">
        <SectionTitle isCentered={false} hasMargin={false}>
          OUR HAPPY CUSTOMERS
        </SectionTitle>
        <ul className="flex gap-2">
          <li className="cursor-pointer">
            <button
              disabled={currentSlide === 0}
              className="p-1 rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 transition-colors duration-200 disabled:text-zinc-400"
              onClick={() => scroll("left")}
            >
              <Arrow className="w-6 h-6 cursor-pointer" />
            </button>
          </li>
          <li className="cursor-pointer">
            <button
              disabled={currentSlide === totalSteps - 1}
              className="p-1 rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 transition-colors duration-200 disabled:text-zinc-400"
              onClick={() => scroll("right")}
            >
              <Arrow className="w-6 h-6 rotate-180 cursor-pointer" />
            </button>
          </li>
        </ul>
      </div>

      <div className="overflow-hidden">
        <ul
          ref={listRef}
          className="flex lg:gap-5 scroll-smooth overflow-x-hidden"
        >
          {reviews.map((review) => {
            return (
              <ReviewCard
                key={review.id}
                rating={review.rating}
                name={review.name}
                review={review.review}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
