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
        mx-auto
        flex
        w-full
        max-w-[191px]
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
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={book.image}
          alt={book.title}
          width={168}
          height={252}
          className="
            aspect-[168/252]
            h-auto
            w-full
            rounded-[10px]
            object-cover
          "
          sizes="
            (max-width:640px) 45vw,
            (max-width:768px) 30vw,
            (max-width:1024px) 22vw,
            168px
          "
        />
      </div>

      {/* Book Details */}
      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-[44px] text-[15px] font-semibold leading-[22px] text-[#1E1E1E]">
          {book.title}
        </h3>

        <p className="mt-1 line-clamp-1 text-[14px] text-[#666666]">
          {book.author}
        </p>

        <button
          className="
            mt-4
            h-[36px]
            w-full
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