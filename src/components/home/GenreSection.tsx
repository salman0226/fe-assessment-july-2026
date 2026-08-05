import Image from "next/image";
import { genres } from "@/constants/genres";

export default function GenreSection() {
  return (
    <section className="mt-10 lg:mt-12">
      {/* Heading */}
      <div className="mb-6">
        <h2
          className="
            text-[26px]
            font-semibold
            leading-tight
            text-[#303030]
            lg:text-[28px]
          "
        >
          Dive into Different Genres
        </h2>
      </div>

      {/* Genres */}
      <div
        className="
          flex
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-hide
          lg:overflow-visible
        "
      >
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="
              relative
              h-[58px]
              w-[180px]
              shrink-0
              overflow-hidden
              rounded-full
              transition-transform
              duration-300
              hover:scale-[1.03]
              sm:w-[190px]
              lg:h-[61px]
              lg:w-[195px]
            "
          >
            <Image
              src={genre.image}
              alt={genre.title}
              fill
              className="object-cover"
              sizes="195px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}