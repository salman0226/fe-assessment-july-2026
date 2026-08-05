import Image from "next/image";
import { Heart } from "lucide-react";
import type { BusinessBook } from "@/constants/business";

interface Props {
  book: BusinessBook;
}

export default function BusinessBookItem({ book }: Props) {
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
          <Heart
            size={16}
            className="text-[#EB5757]"
            fill="white"
          />
        </button>
      )}

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

      {/* Details */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-[48px] text-[16px] font-semibold text-[#303030]">
          {book.title}
        </h3>

        <p className="mt-2 text-[14px] text-[#6D6D6D]">
          {book.author}
        </p>

        <button
          className="
            mt-4
            h-[36px]
            w-full
            rounded-[6px]
            bg-[#121212]
            text-[14px]
            font-semibold
            text-white
            transition
            duration-200
            hover:bg-black
          "
        >
          Read & Chat
        </button>
      </div>
    </div>
  );
}