"use client";

import { useState } from "react";
import Image from "next/image";
import BusinessBookItem from "./BusinessBookItem";
import { businessBooks } from "@/constants/business";

const BOOKS_PER_PAGE = 6;

export default function BusinessSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextBooks = () => {
    setStartIndex(
      (prev) => (prev + BOOKS_PER_PAGE) % businessBooks.length
    );
  };

  const prevBooks = () => {
    setStartIndex(
      (prev) =>
        (prev - BOOKS_PER_PAGE + businessBooks.length) %
        businessBooks.length
    );
  };

  const visibleBooks = [];

  for (let i = 0; i < BOOKS_PER_PAGE; i++) {
    visibleBooks.push(
      businessBooks[(startIndex + i) % businessBooks.length]
    );
  }

  return (
    <section className="w-full">
      {/* Heading */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-[26px] font-semibold text-[#303030] lg:text-[28px]">
            Business
          </h2>

          <p className="mt-2 text-[16px] text-[#707070]">
            Trending books among readers
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevBooks}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white transition hover:shadow-md"
          >
            <Image
              src="/icons/arrow-left.png"
              alt="Previous"
              width={16}
              height={16}
            />
          </button>

          <button
            onClick={nextBooks}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white transition hover:shadow-md"
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
      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-5
          sm:grid-cols-3
          lg:grid-cols-6
        "
      >
        {visibleBooks.map((book) => (
          <BusinessBookItem
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}