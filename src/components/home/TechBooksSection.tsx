"use client";

import { useState } from "react";
import Image from "next/image";
import TechBookItem from "./TechBookItem";
import { techBooks } from "@/constants/techBooks";

const BOOKS_PER_PAGE = 6;

export default function TechBooksSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextBooks = () => {
    setStartIndex(
      (prev) => (prev + BOOKS_PER_PAGE) % techBooks.length
    );
  };

  const prevBooks = () => {
    setStartIndex(
      (prev) =>
        (prev - BOOKS_PER_PAGE + techBooks.length) %
        techBooks.length
    );
  };

  const visibleBooks = [];

  for (let i = 0; i < BOOKS_PER_PAGE; i++) {
    visibleBooks.push(
      techBooks[(startIndex + i) % techBooks.length]
    );
  }

  return (
    <section className="mt-20 w-full max-w-[1236px]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[28px] font-semibold text-[#303030]">
            Tech Books
          </h2>

          <p className="mt-2 text-[16px] text-[#707070]">
            Trending books among readers
          </p>
        </div>

        <div className="flex gap-[10px]">
          <button
            onClick={prevBooks}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white"
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

      <div className="mt-8 flex gap-[18px] overflow-hidden">
        {visibleBooks.map((book) => (
          <TechBookItem
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}