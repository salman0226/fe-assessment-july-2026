"use client";

import { useState } from "react";
import Image from "next/image";
import BookItem from "./BookItem";
import { bestSellers } from "@/constants/bestSellers";

const BOOKS_PER_PAGE = 5;

export default function BestSellerSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextBooks = () => {
    setStartIndex((prev) => (prev + 1) % bestSellers.length);
  };

  const prevBooks = () => {
    setStartIndex(
      (prev) => (prev - 1 + bestSellers.length) % bestSellers.length
    );
  };

  const visibleBooks = Array.from(
    { length: BOOKS_PER_PAGE },
    (_, i) => bestSellers[(startIndex + i) % bestSellers.length]
  );

  return (
    <section className="mt-16 w-full max-w-[1253px]">
      {/* Heading */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[28px] font-semibold text-[#303030]">
            Our Best Sellers
          </h2>

          <p className="mt-2 text-[16px] text-[#707070]">
            Trending books among readers
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevBooks}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E8E8] bg-white transition hover:shadow-md"
          >
            <Image
              src="/icons/arrow-left.png"
              alt="Previous"
              width={18}
              height={18}
            />
          </button>

          <button
            onClick={nextBooks}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E8E8] bg-white transition hover:shadow-md"
          >
            <Image
              src="/icons/arrow-right.png"
              alt="Next"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      {/* Books */}
      <div className="mt-8 overflow-hidden">
        <div className="flex justify-between gap-[21px]">
          {visibleBooks.map((book, index) => (
            <div
              key={`${book.id}-${index}`}
              className="flex-shrink-0"
            >
              <BookItem book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}