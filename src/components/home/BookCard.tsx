import Image from "next/image";

interface BookCardProps {
  image: string;
}

export default function BookCard({
  image,
}: BookCardProps) {
  return (
    <div
      className="
        w-[161px]
        h-[238px]
        overflow-hidden
        rounded-lg
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <Image
        src={image}
        alt="Book"
        width={161}
        height={238}
        className="h-full w-full object-cover"
      />
    </div>
  );
}