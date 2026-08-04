import Image from "next/image";
import { NonFictionBook } from "@/constants/nonFiction";

interface NonFictionBookItemProps {
  book: NonFictionBook;
}

export default function NonFictionBookItem({
  book,
}: NonFictionBookItemProps) {
  return (
    <div className="w-full max-w-[190px] rounded-[12px] border border-[#EAEAE6] bg-white p-[10px]">
      <div className="relative">
        <Image
          src={book.image}
          alt={book.title}
          width={170}
          height={245}
          className="h-[245px] w-[170px] rounded-[8px] object-cover"
        />

        {book.favourite && (
          <button className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <Image
              src="/icons/heart-fill.png"
              alt="Favourite"
              width={18}
              height={18}
            />
          </button>
        )}
      </div>

      <h3 className="mt-4 truncate text-[16px] font-medium text-[#303030]">
        {book.title}
      </h3>

      <p className="mt-1 text-[14px] text-[#707070]">
        {book.author}
      </p>

      <button className="mt-4 h-[36px] w-full rounded-[8px] bg-[#2D2A6E] text-[16px] font-medium text-white">
        Read & Chat
      </button>
    </div>
  );
}