export type StackCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface StackItem {
  name: string;
  category: StackCategory;
  hint?: string;
}

export const stack: StackItem[] = [
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Context API", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "SSR / SSG", category: "Backend" },

  { name: "MongoDB", category: "Database" },
  { name: "Mongoose ODM", category: "Database" },
  { name: "MySQL", category: "Database" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Cloudinary", category: "Tools" },
];

export const stackCategories: StackCategory[] = ["Frontend", "Backend", "Database", "Tools"];

export const marqueeTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "JWT",
  "Tailwind",
  "Cloudinary",
  "Vercel",
  "Git",
];
