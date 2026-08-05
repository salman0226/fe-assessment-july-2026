import BookCard from "./BookCard";
import { books } from "@/constants/books";

export default function NewArrivals() {
  return (
    <section className="w-full">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-semibold text-[#303030]">
          New Arrivals
        </h2>

        <p className="mt-2 text-base text-[#707070]">
          Trending books among readers
        </p>
      </div>

      {/* Books */}
      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
        "
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            image={book.image}
          />
        ))}
      </div>
    </section>
  );
}