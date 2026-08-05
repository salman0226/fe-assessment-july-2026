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
        rounded-2xl
        border
        border-[#FFE4CF]
        bg-white
        px-5
        py-6
        sm:px-7
        sm:py-8
        lg:px-9
        lg:py-8
        ${className}
      `}
      style={{ backgroundColor: bg }}
    >
      {/* Decorative Circle */}
      <div
        className="
          absolute
          -right-12
          -top-12
          h-[160px]
          w-[160px]
          rounded-full
          bg-white/35
          sm:h-[200px]
          sm:w-[200px]
          lg:h-[220px]
          lg:w-[220px]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h2
          className="
            text-2xl
            font-semibold
            text-[#1E1E1E]
            sm:text-[28px]
            lg:text-[30px]
          "
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[430px]
            text-base
            leading-7
            text-[#555555]
            sm:text-[17px]
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
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
          "
        >
          {books.map((book, index) => (
            <div
              key={index}
              className="
                mx-auto
                w-full
                max-w-[173px]
              "
            >
              <Image
                src={book}
                alt={`Book ${index + 1}`}
                width={173}
                height={260}
                className="
                  h-auto
                  w-full
                  rounded-xl
                  object-cover
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}