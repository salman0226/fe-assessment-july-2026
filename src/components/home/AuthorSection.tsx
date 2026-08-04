"use client";

import { useState } from "react";
import Image from "next/image";
import AuthorCard from "./AuthorCard";
import { authors } from "@/constants/authors";

const AUTHORS_PER_PAGE = 3;

export default function AuthorSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextAuthors = () => {
    setStartIndex((prev) => (prev + AUTHORS_PER_PAGE) % authors.length);
  };

  const prevAuthors = () => {
    setStartIndex(
      (prev) =>
        (prev - AUTHORS_PER_PAGE + authors.length) % authors.length
    );
  };

  const visibleAuthors = [];

  for (let i = 0; i < AUTHORS_PER_PAGE; i++) {
    visibleAuthors.push(authors[(startIndex + i) % authors.length]);
  }

  return (
    <section className="mt-20 w-full max-w-[1072px]">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] font-semibold leading-none text-[#1E1E1E]">
          Speak with Authors
        </h2>

        {/* Navigation */}
        <div className="flex gap-[11px]">
          <button
            onClick={prevAuthors}
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
            onClick={nextAuthors}
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

      {/* Cards */}
      <div className="mt-[34px] flex gap-[9px]">
        {visibleAuthors.map((author) => (
          <AuthorCard
            key={author.id}
            author={author}
          />
        ))}
      </div>
    </section>
  );
}