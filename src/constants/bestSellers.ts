export interface BestSellerBook {
  id: number;
  image: string;
  title: string;
  author: string;
  favourite: boolean;
}

export const bestSellers: BestSellerBook[] = [
  {
    id: 1,
    image: "/images/books/million-to-one.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 2,
    image: "/images/books/richest-man.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 3,
    image: "/images/books/i-know-how-story-ends.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 4,
    image: "/images/books/memory.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 5,
    image: "/images/books/a-girl-named-harper.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },

  // repeat the first four books so the carousel loops without broken images

  {
    id: 6,
    image: "/images/books/million-to-one.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 7,
    image: "/images/books/richest-man.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 8,
    image: "/images/books/i-know-how-story-ends.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 9,
    image: "/images/books/memory.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
];