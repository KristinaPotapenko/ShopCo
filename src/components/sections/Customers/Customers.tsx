"use client";

import { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getComments, selectComments } from "@/store/commentsSlice";

import { Comment } from "@/types/comment";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ReviewCard from "@/components/ui/cards/ReviewCard/ReviewCard";
import CarouselControls from "@/components/ui/CarouselControls/CarouselControls";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import { SkeletonReviewCard } from "@/components/ui/cards/ReviewCard/SkeletonReviewCard";

export default function Customers() {
  const listRef = useRef<HTMLUListElement>(null);

  const [visibleSlides, setVisibleSlides] = useState(1);
  const [totalSteps, setTotalSteps] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const dispatch = useAppDispatch();
  const { comments, status, error } = useAppSelector(selectComments);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!listRef.current) return;

      setVisibleSlides(window.innerWidth >= 1024 ? 3 : 1);

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
  }, [visibleSlides, comments]);

  const scroll = (direction: "left" | "right") => {
    if (!listRef?.current) return;

    const slideWidth = listRef.current.scrollWidth / comments.length;
    const totalSlideWidth = visibleSlides === 1 ? slideWidth : slideWidth;

    const scrollAmount =
      direction === "left"
        ? -totalSlideWidth * visibleSlides
        : totalSlideWidth * visibleSlides;

    setCurrentSlide((prev) => (direction === "left" ? prev - 1 : prev + 1));

    listRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const renderContent = (
    comments: Comment[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string | null,
    retry: () => void
  ) => {
    if (status === "idle" || status === "loading") {
      return (
        <ul
          ref={listRef}
          className="flex lg:gap-5 scroll-smooth overflow-x-hidden"
        >
          {Array.from({ length: visibleSlides }).map((_, index) => (
            <SkeletonReviewCard key={index} />
          ))}
        </ul>
      );
    }

    if (status === "succeeded") {
      if (comments.length === 0) {
        return (
          <div className="w-full text-center py-10">No comments found</div>
        );
      }
      return (
        <ul
          ref={listRef}
          className="flex lg:gap-5 scroll-smooth overflow-x-hidden"
        >
          {comments.map((comment) => (
            <ReviewCard
              key={comment.id}
              rating={comment.likes}
              name={comment.user.fullName}
              review={comment.body}
            />
          ))}
        </ul>
      );
    }

    if (status === "failed") {
      return (
        <div className="flex flex-col items-center justify-center gap-6 w-full text-center py-10 mt-4">
          <p className="font-normal text-zinc-400">
            Error loading products: {error}
          </p>
          <PrimaryButton type="button" onClick={retry}>
            Try Again
          </PrimaryButton>
        </div>
      );
    }
  };

  return (
    <section className="container px-4 pt-16 mx-auto">
      <div className="flex items-center justify-between gap-4 mb-6 lg:mb-10">
        <SectionTitle isCentered={false} hasMargin={false}>
          OUR HAPPY CUSTOMERS
        </SectionTitle>
        {comments?.length > 0 && (
          <CarouselControls
            currentSlide={currentSlide}
            totalSteps={totalSteps}
            scroll={scroll}
          />
        )}
      </div>

      <div className="overflow-hidden">
        {renderContent(comments, status, error, getComments)}
      </div>
    </section>
  );
}
