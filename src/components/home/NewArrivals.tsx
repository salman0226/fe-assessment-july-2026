import BookCard from "./BookCard";
import { books } from "@/constants/books";

export default function NewArrivals() {
  return (
    <section
      className="
        mt-8
        w-[1027px]
      "
    >
      {/* Heading */}

      <div>
        <h2
          className="
            text-[28px]
            font-semibold
            leading-[36px]
            text-[#303030]
          "
        >
          New Arrivals
        </h2>

        <p
          className="
            mt-[2px]
            text-[16px]
            leading-6
            text-[#707070]
          "
        >
          Trending books among readers
        </p>
      </div>

      {/* Books */}

      <div
        className="
          mt-[27px]
          flex
          gap-3
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