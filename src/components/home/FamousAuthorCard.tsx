import Image from "next/image";
import { FamousAuthor } from "@/constants/famousAuthors";

interface FamousAuthorCardProps {
  author: FamousAuthor;
}

export default function FamousAuthorCard({
  author,
}: FamousAuthorCardProps) {
  return (
    <div className="relative h-[142px] w-[142px] overflow-hidden rounded-[12px]">
      <Image
        src={author.image}
        alt={author.name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 flex h-[34px] items-center justify-center bg-black/55 backdrop-blur-[2px]">
        <span className="text-[14px] font-medium text-white">
          {author.name}
        </span>
      </div>
    </div>
  );
}