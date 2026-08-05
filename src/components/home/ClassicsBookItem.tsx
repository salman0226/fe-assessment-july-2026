import Image from "next/image";
import { Heart } from "lucide-react";
import type { ClassicsBook } from "@/constants/classics";

interface Props {
  book: ClassicsBook;
}

export default function ClassicsBookItem({ book }: Props) {
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
      {book.favourite && (
        <button className="absolute right-[10px] top-[10px] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
          <Heart
            size={16}
            className="text-[#EB5757]"
            fill="white"
          />
        </button>
      )}

      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={book.image}
          alt={book.title}
          width={168}
          height={252}
          className="aspect-[168/252] h-auto w-full rounded-[10px] object-cover"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-[48px] text-[16px] font-semibold text-[#303030]">
          {book.title}
        </h3>

        <p className="mt-2 text-[14px] text-[#3F6EF6]">
          {book.author}
        </p>

        <button className="mt-4 h-[36px] w-full rounded-[6px] bg-[#121212] text-[14px] font-semibold text-white">
          Read & Chat
        </button>
      </div>
    </div>
  );
}