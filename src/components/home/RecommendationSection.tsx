"use client";

import { useState } from "react";
import Image from "next/image";
import RecommendationCard from "./RecommendationCard";
import { recommendations } from "@/constants/recommendations";

export default function RecommendationSection() {
  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % recommendations.length);
  };

  const next = (current + 1) % recommendations.length;

  return (
    <section className="mt-12 overflow-hidden">
      <div className="relative w-[1034px] h-[475px]">

        {/* Left Card */}
        <div className="absolute left-0 top-0 z-10">
          <RecommendationCard
            title={recommendations[current].title}
            description={recommendations[current].description}
            bg={recommendations[current].bg}
            books={recommendations[current].books}
            className="w-[792px]"
          />
        </div>

        {/* Right Preview */}
        <div className="absolute left-[804px] top-0 z-0">
          <RecommendationCard
            title={recommendations[next].title}
            description={recommendations[next].description}
            bg={recommendations[next].bg}
            books={recommendations[next].books}
            className="w-[792px]"
          />
        </div>

        {/* Arrow */}
        <button
          onClick={nextCard}
          className="absolute left-[760px] top-1/2 z-30 flex h-[72px] w-[72px] -translate-y-1/2 items-center justify-center rounded-full border border-[#EBEBEB] bg-white shadow-lg"
        >
          <Image
            src="/icons/right-arrow.png"
            alt="Next"
            width={33}
            height={33}
          />
        </button>

      </div>
    </section>
  );
}