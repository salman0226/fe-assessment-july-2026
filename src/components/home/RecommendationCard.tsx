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
      className={`
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#FFE4CF]
        p-6
        lg:h-[475px]
        lg:px-9
        lg:py-8
        ${className}
      `}
      style={{ backgroundColor: bg }}
    >
      {/* Circle */}
      <div className="absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full bg-white/35" />

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-[#1E1E1E] lg:text-[30px]">
          {title}
        </h2>

        <p
          className="
            mt-4
            max-w-[430px]
            text-[15px]
            leading-7
            text-[#555555]
            lg:text-[18px]
            lg:leading-8
          "
        >
          {description}
        </p>

        {/* Books */}
        <div
          className="
            mt-8
            flex
            gap-4
            overflow-x-auto
            pb-2
            lg:overflow-visible
          "
        >
          {books.map((book, index) => (
            <Image
              key={index}
              src={book}
              alt={`Book ${index + 1}`}
              width={173}
              height={260}
              className="
                h-[220px]
                w-[145px]
                shrink-0
                rounded-[10px]
                object-cover
                lg:h-[260px]
                lg:w-[173px]
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
}