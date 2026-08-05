export interface TechBook {
  id: number;
  image: string;
  title: string;
  author: string;
  favourite: boolean;
}

export const techBooks: TechBook[] = [
  {
    id: 1,
    image: "/images/tech/tech-dot-com.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 2,
    image: "/images/tech/web-technology.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 3,
    image: "/images/tech/chatgpt-for-beginners.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 4,
    image: "/images/tech/ai-chatgpt-education.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
  {
    id: 5,
    image: "/images/tech/ui-ux-guide.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },

  // Repeat first card
  {
    id: 6,
    image: "/images/tech/tech-dot-com.png",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    favourite: true,
  },
];