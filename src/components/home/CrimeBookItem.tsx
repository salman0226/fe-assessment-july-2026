import Image from "next/image";
import { CrimeBook } from "@/constants/crimeFiction";

interface CrimeBookItemProps {
  book: CrimeBook;
}

export default function CrimeBookItem({
  book,
}: CrimeBookItemProps) {
  return (
    <div className="relative h-[354px] w-[191px] flex-shrink-0 rounded-xl border border-[#E9E9E9] bg-white p-3 transition-all duration-300 hover:shadow-lg">
      {/* Favourite */}
      <button className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
        <Image
          src={
            book.favourite
              ? "/icons/heart-fill.png"
              : "/icons/heart-outline.png"
          }
          alt="Favourite"
          width={18}
          height={18}
        />
      </button>

      {/* Book */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={book.image}
          alt={book.title}
          width={168}
          height={252}
          className="h-[252px] w-[168px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="mt-3">
        <h3 className="truncate text-[16px] font-semibold text-[#303030]">
          {book.title}
        </h3>

        <p className="mt-1 text-[14px] text-[#7A7A7A]">
          {book.author}
        </p>

        <button className="mt-4 flex h-[33px] w-full items-center justify-center rounded-full bg-[#2E294E] text-[14px] font-medium text-white transition hover:bg-[#1F1B36]">
          Read & Chat
        </button>
      </div>
    </div>
  );
}