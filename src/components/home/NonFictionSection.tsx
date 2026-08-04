"use client";

import { useState } from "react";
import Image from "next/image";
import NonFictionBookItem from "./NonFictionBookItem";
import { nonFictionBooks } from "@/constants/nonFiction";

const BOOKS_PER_PAGE = 6;

export default function NonFictionSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextBooks = () => {
    setStartIndex(
      (prev) => (prev + BOOKS_PER_PAGE) % nonFictionBooks.length
    );
  };

  const prevBooks = () => {
    setStartIndex(
      (prev) =>
        (prev - BOOKS_PER_PAGE + nonFictionBooks.length) %
        nonFictionBooks.length
    );
  };

  const visibleBooks = [];

  for (let i = 0; i < BOOKS_PER_PAGE; i++) {
    visibleBooks.push(
      nonFictionBooks[(startIndex + i) % nonFictionBooks.length]
    );
  }

  return (
    <section className="mt-20 w-full">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[28px] font-semibold text-[#303030]">
            Non Fiction Books
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
      <div className="mt-8 flex gap-[18px] overflow-hidden">
        {visibleBooks.map((book) => (
          <NonFictionBookItem
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}
