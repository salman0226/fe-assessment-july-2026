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
    <section className="w-full overflow-hidden">
      {/* ================= Desktop ================= */}
      <div className="relative hidden h-[475px] xl:block">
        {/* Main Card */}
        <div className="absolute left-0 top-0 z-10 w-[78%]">
          <RecommendationCard
            title={recommendations[current].title}
            description={recommendations[current].description}
            bg={recommendations[current].bg}
            books={recommendations[current].books}
            className="w-full"
          />
        </div>

        {/* Preview Card */}
        <div className="absolute right-[-58%] top-0 z-0 w-[78%]">
          <RecommendationCard
            title={recommendations[next].title}
            description={recommendations[next].description}
            bg={recommendations[next].bg}
            books={recommendations[next].books}
            className="w-full"
          />
        </div>

        {/* Arrow */}
        <button
          onClick={nextCard}
          className="
            absolute
            left-[74%]
            top-1/2
            z-30
            flex
            h-[72px]
            w-[72px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#EBEBEB]
            bg-white
            shadow-lg
            transition
            hover:scale-105
          "
        >
          <Image
            src="/icons/right-arrow.png"
            alt="Next"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* ================= Tablet & Mobile ================= */}
      <div className="xl:hidden">
        <RecommendationCard
          title={recommendations[current].title}
          description={recommendations[current].description}
          bg={recommendations[current].bg}
          books={recommendations[current].books}
          className="w-full"
        />

        <div className="mt-6 flex justify-center">
          <button
            onClick={nextCard}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#EBEBEB]
              bg-white
              shadow-md
              transition
              hover:scale-105
            "
          >
            <Image
              src="/icons/right-arrow.png"
              alt="Next"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
}