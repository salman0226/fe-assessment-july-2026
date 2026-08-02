import Image from "next/image";

interface RecommendationCardProps {
  title: string;
  description: string;
  bg: string;
  books: string[];
  className?: string;
}

export default function RecommendationCard({
  title,
  description,
  bg,
  books,
  className = "",
}: RecommendationCardProps) {
  return (
    <div
  className={`relative h-[475px] overflow-hidden rounded-xl border border-[#FFE4CF] px-9 py-8 ${className}`}
  style={{ backgroundColor: bg }}
>
      {/* Decorative Circle */}
      <div className="absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full bg-white/35" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-[30px] font-semibold leading-none text-[#1E1E1E]">
          {title}
        </h2>

        <p className="mt-5 w-[430px] text-[18px] leading-8 text-[#555555]">
          {description}
        </p>

        {/* Books */}
        <div className="mt-8 flex gap-4">
          {books.map((book, index) => (
            <Image
              key={index}
              src={book}
              alt={`Book ${index + 1}`}
              width={173}
              height={260}
              className="h-[260px] w-[173px] rounded-[10px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}