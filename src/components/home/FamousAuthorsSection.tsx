"use client";

import FamousAuthorCard from "./FamousAuthorCard";
import { famousAuthors } from "@/constants/famousAuthors";

export default function FamousAuthorsSection() {
  return (
    <section className="mt-20 w-full max-w-[1174px]">
      <h2 className="text-[28px] font-semibold text-[#303030]">
        Famous Authors
      </h2>

      <div className="mt-8 flex gap-[18px] overflow-x-auto scrollbar-hide">
        {famousAuthors.map((author) => (
          <FamousAuthorCard
            key={author.id}
            author={author}
          />
        ))}
      </div>
    </section>
  );
}