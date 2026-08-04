export interface AcademicBook {
  id: number;
  image: string;
  title: string;
  author: string;
  favourite: boolean;
}

export const academicBooks: AcademicBook[] = [
  {
    id: 1,
    image: "/images/academics/indian-polity.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 2,
    image: "/images/academics/upsc.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 3,
    image: "/images/academics/physics.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 4,
    image: "/images/academics/tamil-book.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 5,
    image: "/images/academics/learn-english.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },

  // Repeat the first image as the sixth card (matches Figma)
  {
    id: 6,
    image: "/images/academics/story-ends.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
];