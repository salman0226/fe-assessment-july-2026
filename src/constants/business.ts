export interface BusinessBook {
  id: number;
  image: string;
  title: string;
  author: string;
  favourite: boolean;
}

export const businessBooks: BusinessBook[] = [
  {
    id: 1,
    image: "/images/business/the-second-business-book.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 2,
    image: "/images/business/international-business.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 3,
    image: "/images/business/start-your-own-business.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 4,
    image: "/images/business/indian-business.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 5,
    image: "/images/business/international-business-strategy.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },

  // Repeat first book as 6th card
  {
    id: 6,
    image: "/images/business/story-ends.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
];