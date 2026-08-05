import Image from "next/image";
import { CrimeBook } from "@/constants/crimeFiction";

interface CrimeBookItemProps {
  book: CrimeBook;
}

export default function CrimeBookItem({
  book,
}: CrimeBookItemProps) {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[190px]
        flex-col
        rounded-[12px]
        border
        border-[#EAEAE6]
        bg-white
        p-[10px]
        transition-all
        duration-300
        hover:shadow-md
      "
    >
      {/* Favourite */}
      {book.favourite && (
        <button
          className="
            absolute
            right-[10px]
            top-[10px]
            z-10
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-sm
          "
        >
          <Image
            src="/icons/heart-fill.png"
            alt="Favourite"
            width={16}
            height={16}
          />
        </button>
      )}

      {/* Image */}
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={book.image}
          alt={book.title}
          width={170}
          height={245}
          className="
            aspect-[170/245]
            h-auto
            w-full
            rounded-[10px]
            object-cover
          "
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-[48px] text-[16px] font-semibold text-[#303030]">
          {book.title}
        </h3>

        <p className="mt-2 text-[14px] text-[#707070]">
          {book.author}
        </p>

        <button
          className="
            mt-4
            h-[36px]
            w-full
            rounded-[8px]
            bg-[#2D2A6E]
            text-[14px]
            font-medium
            text-white
            hover:bg-[#39348A]
          "
        >
          Read & Chat
        </button>
      </div>
    </div>
  );
}