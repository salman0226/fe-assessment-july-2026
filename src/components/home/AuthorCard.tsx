import Image from "next/image";
import { AuthorBook } from "@/constants/authors";

interface AuthorCardProps {
  author: AuthorBook;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="relative w-[351px] rounded-[9px] border border-[#EAEAE6] bg-white p-[10px]">
      {/* Favourite Button */}
      <button className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
        <Image
          src={
            author.favourite
              ? "/icons/heart-fill.png"
              : "/icons/heart-outline.png"
          }
          alt="Favourite"
          width={18}
          height={18}
        />
      </button>

      {/* Images */}
      <div className="flex gap-[2px] overflow-hidden rounded-[9px]">
        <Image
          src={author.leftImage}
          alt={author.title}
          width={165}
          height={245}
          className="h-[245px] w-[165px] rounded-l-[9px] object-cover"
        />

        <Image
          src={author.rightImage}
          alt={author.title}
          width={164}
          height={245}
          className="h-[245px] w-[164px] rounded-r-[9px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className="truncate text-[16px] font-medium text-[#303030]">
          {author.title}
        </h3>

        <p className="mt-1 text-[13px] text-[#7A7A7A]">
          by {author.author}
        </p>

        <button className="mt-3 flex h-[30px] w-full items-center justify-center rounded-[6px] bg-[#121212] text-[13px] font-medium text-white transition hover:bg-[#222]">
          Chat with Me
        </button>
      </div>
    </div>
  );
}