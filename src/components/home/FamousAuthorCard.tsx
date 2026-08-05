import Image from "next/image";
import { FamousAuthor } from "@/constants/famousAuthors";

interface FamousAuthorCardProps {
  author: FamousAuthor;
}

export default function FamousAuthorCard({
  author,
}: FamousAuthorCardProps) {
  return (
    <div
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[142px]
        overflow-hidden
        rounded-[12px]
        transition
        duration-300
        hover:shadow-lg
      "
    >
      <Image
        src={author.image}
        alt={author.name}
        fill
        className="object-cover"
        sizes="
          (max-width:640px) 45vw,
          (max-width:768px) 30vw,
          (max-width:1024px) 22vw,
          142px
        "
      />

      <div className="absolute inset-x-0 bottom-0 flex h-[36px] items-center justify-center bg-black/60 backdrop-blur-sm">
        <span className="px-2 text-center text-[13px] font-medium text-white">
          {author.name}
        </span>
      </div>
    </div>
  );
}