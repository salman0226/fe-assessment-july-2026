import Image from "next/image";
import { genres } from "@/constants/genres";

export default function GenreSection() {
  return (
    <section className="mt-12 w-full">
      {/* Title */}
      <h2 className="mb-6 text-[26px] font-semibold text-[#303030] md:text-[30px] lg:text-[28px]">
        Dive into Different Genres
      </h2>

      {/* Genre Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="group relative h-[60px] overflow-hidden rounded-full transition-transform duration-300 hover:scale-[1.03]"
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