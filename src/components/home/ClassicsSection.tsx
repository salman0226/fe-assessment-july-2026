"use client";

import { useState } from "react";
import Image from "next/image";
import ClassicsBookItem from "./ClassicsBookItem";
import { classicsBooks } from "@/constants/classics";

const BOOKS_PER_PAGE = 6;

export default function ClassicsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextBooks = () => {
    setStartIndex((prev) => (prev + 1) % classicsBooks.length);
  };

  const prevBooks = () => {
    setStartIndex(
      (prev) =>
        (prev - 1 + classicsBooks.length) %
        classicsBooks.length
    );
  };

  const visibleBooks = [];

  for (let i = 0; i < BOOKS_PER_PAGE; i++) {
    visibleBooks.push(
      classicsBooks[(startIndex + i) % classicsBooks.length]
    );
  }

  return (
    <section className="mx-auto mt-20 w-full max-w-[1253px]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h2 className="text-[28px] font-semibold leading-[34px] text-[#303030]">
            Classics
          </h2>

          <p className="mt-2 text-[16px] font-normal leading-[22px] text-[#707070]">
            Trending books among readers
          </p>
        </div>

        <div className="flex gap-[11px]">
          <button
            onClick={prevBooks}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white transition hover:bg-gray-50"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white transition hover:bg-gray-50"
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
      <div className="mt-8 flex gap-[21px] overflow-hidden">
        {visibleBooks.map((book) => (
          <ClassicsBookItem
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}