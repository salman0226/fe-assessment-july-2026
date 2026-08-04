import Image from "next/image";
import { BestSellerBook } from "@/constants/bestSellers";

interface BookItemProps {
  book: BestSellerBook;
}

export default function BookItem({ book }: BookItemProps) {
  return (
    <div
      className="
        relative
        flex
        h-[354px]
        w-[191px]
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
      {/* Favourite Button */}
      <button
        className="
          absolute
          right-[10px]
          top-[10px]
          z-10
          flex
          h-[31px]
          w-[31px]
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-sm
        "
      >
        <Image
          src={
            book.favourite
              ? "/icons/heart-fill.png"
              : "/icons/heart-outline.png"
          }
          alt="Favourite"
          width={16}
          height={16}
        />
      </button>

      {/* Book Image */}
      <Image
        src={book.image}
        alt={book.title}
        width={168}
        height={252}
        className="
          h-[252px]
          w-[168px]
          rounded-[10px]
          object-cover
        "
      />

      {/* Book Info */}
      <div className="mt-[10px] flex flex-1 flex-col">
        <h3
          className="
            line-clamp-1
            text-[15px]
            font-semibold
            leading-[22px]
            text-[#1E1E1E]
          "
        >
          {book.title}
        </h3>

        <p
          className="
            mt-[4px]
            line-clamp-1
            text-[14px]
            text-[#666666]
          "
        >
          {book.author}
        </p>

        {/* Read & Chat Button */}
        <button
          className="
            mt-auto
            h-[33px]
            w-[165px]
            self-center
            rounded-[8px]
            bg-[#1F1B4B]
            text-[14px]
            font-medium
            text-white
            transition
            duration-200
            hover:bg-[#2B2761]
          "
        >
          Read & Chat
        </button>
      </div>
    </div>
  );
}