import Image from "next/image";
import { Heart } from "lucide-react";
import { TechBook } from "@/constants/techBooks";

interface Props {
  book: TechBook;
}

export default function TechBookItem({ book }: Props) {
  return (
    <div className="w-[191px] rounded-[12px] border border-[#EAEAE6] bg-white p-[10px]">
      <div className="relative">
        <Image
          src={book.image}
          alt={book.title}
          width={168}
          height={252}
          className="h-[252px] w-[168px] rounded-[10px] object-cover"
        />

        {book.favourite && (
          <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
            <Heart
              size={16}
              className="text-[#EB5757]"
              fill="white"
            />
          </button>
        )}
      </div>

      <div className="mt-4">
        <h3 className="truncate text-[12px] font-medium leading-[15px] text-[#303030]">
          {book.title}
        </h3>

        <p className="mt-1 text-[10px] font-medium text-[#4F7FD8]">
          {book.author}
        </p>

        <button className="mt-3 h-[31px] w-full rounded-[6px] bg-[#121212] text-[12px] font-medium text-white transition hover:bg-black">
          Read & Chat
        </button>
      </div>
    </div>
  );
}