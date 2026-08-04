export interface AuthorBook {
  id: number;
  leftImage: string;
  rightImage: string;
  title: string;
  author: string;
  favourite: boolean;
}

export const authors: AuthorBook[] = [
  {
    id: 1,
    leftImage: "/images/authors/shakespeare.png",
    rightImage: "/images/authors/tom-sawyer.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 2,
    leftImage: "/images/authors/sun-tzu.png",
    rightImage: "/images/authors/author-5.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 3,
    leftImage: "/images/authors/author-6.png",
    rightImage: "/images/authors/thirukkural.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
];