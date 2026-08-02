import Image from "next/image";
import { genres } from "@/constants/genres";

export default function GenreSection() {
  return (
    <section className="mt-12 w-full">
      {/* Section Title */}
      <h2 className="mb-5 text-[28px] font-semibold leading-[36px] text-[#303030]">
        Dive into Different Genres
      </h2>

      {/* Genre Cards */}
      <div className="flex items-center gap-[12px]">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="
              relative
              h-[61px]
              w-[195px]
              overflow-hidden
              rounded-full
              cursor-pointer
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
          >
            <Image
              src={genre.image}
              alt={genre.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}