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
    <section className="mt-12">
      <div className="relative">

        {/* Current Card */}
        <RecommendationCard
          title={recommendations[current].title}
          description={recommendations[current].description}
          bg={recommendations[current].bg}
          books={recommendations[current].books}
          className="w-full"
        />

        {/* Desktop Preview */}
        <div
          className="
            absolute
            top-0
            left-[78%]
            hidden
            lg:block
          "
        >
          <RecommendationCard
            title={recommendations[next].title}
            description={recommendations[next].description}
            bg={recommendations[next].bg}
            books={recommendations[next].books}
            className="w-[780px]"
          />
        </div>

        {/* Arrow */}
        <button
          onClick={nextCard}
          className="
            absolute
            right-4
            top-1/2
            z-30
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#EBEBEB]
            bg-white
            shadow-lg
            lg:right-[230px]
            lg:h-[72px]
            lg:w-[72px]
          "
        >
          <Image
            src="/icons/right-arrow.png"
            alt="Next"
            width={30}
            height={30}
          />
        </button>

      </div>
    </section>
  );
}