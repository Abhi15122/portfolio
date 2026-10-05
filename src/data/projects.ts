export interface Project {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  description: string;
  cover: string;
  tech: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  detail: {
    overview: string;
    problem: string;
    solution: string;
    results: string;
    screenshots: { src: string; alt: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "nexthire-ai",
    title: "NextHire AI",
    year: "2026",
    tagline:
      "Interview practice with AI-generated questions and feedback.",
    description:
      "A mock interview application using Next.js, Clerk, Groq, and Neon PostgreSQL with Drizzle ORM.",
    cover: "/images/projects/nexthire-ai.png",
    tech: ["Next.js", "JavaScript", "Clerk", "Groq AI", "Neon", "Drizzle ORM"],
    liveUrl: null,
    repoUrl: "https://github.com/Abhi15122/Nexthire-AI-",
    detail: {
      overview:
        "NextHire AI helps users practice interviews by generating role-specific questions and saving their responses for later review.",
      problem:
        "I wanted a way to practice questions for a specific role and review previous answers.",
      solution:
        "Built Next.js API routes that use Groq to generate interview questions. Clerk manages authentication, while Neon PostgreSQL and Drizzle ORM store interviews and answers. User ownership checks ensure users can access and update only their own interview records.",
      results:
        "Users can create a mock interview, save or update their answers, and review AI-generated feedback.",
      screenshots: [],
    },
  },
  {
    slug: "airbnb-clone",
    title: "StayFinder",
    year: "2025",
    tagline:
      "An Airbnb-inspired rental project with listings, sign-in, and booking APIs.",
    description:
      "A Next.js frontend with an Express REST API, MongoDB, and JWT authentication. The booking API validates dates, guest limits, and existing reservations.",
    cover: "/images/projects/airbnb-clone.png",
    tech: [
      "Next.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Tailwind CSS",
    ],
    liveUrl: "https://stayfinder-abhi.vercel.app/",
    repoUrl: "https://github.com/Abhi15122/stayfinder",
    detail: {
      overview:
        "StayFinder is an Airbnb-inspired rental project. It uses Next.js for the frontend and a separate Express API with MongoDB for listings, users, and bookings.",
      problem:
        "I wanted to understand how rental listings, user authentication, and booking validation work together in a full-stack application.",
      solution:
        "The Express API uses JWT authentication, bcrypt password hashing, and Mongoose models. Booking routes check date order, guest limits, and overlaps with existing reservations, calculate prices on the server, and let users view or cancel their own bookings.",
      results:
        "The project includes listing pages, authentication, and booking APIs. It is still under development, with complete UI flows, payments, and host listing management outside the current implementation.",
      screenshots: [
        // TODO: Abhi — add screenshots into public/images/projects/ and reference here
      ],
    },
  },
  {
    slug: "ganesh-auto-spare-hubs",
    title: "Ganesh Auto Spare Hubs",
    year: "2025",
    tagline: "A catalogue and enquiry website for a local auto-spares business.",
    description:
      "A collaborative Next.js project with product-category pages, search, and an EmailJS enquiry form.",
    cover: "/images/projects/ganesh-auto-spare-hubs.png",
    tech: ["Next.js", "React.js", "Tailwind CSS", "SSR", "EmailJS"],
    liveUrl: "https://ganesh-auto-spare-hub-six.vercel.app/",
    repoUrl: "https://github.com/Abhi15122/Ganesh-auto-spare-hub",
    detail: {
      overview:
        "A collaborative website for a local auto-spares business, with product categories and a customer enquiry form.",
      problem:
        "Customers needed a way to browse product categories and ask about parts from a phone or computer.",
      solution:
        "The project uses Next.js with dynamic routes for product categories, modular React and Tailwind CSS components, and EmailJS for enquiry delivery without maintaining a separate backend.",
      results:
        "The site is deployed on Vercel and includes category search, responsive navigation, and an enquiry form configured with EmailJS.",
      screenshots: [
        // TODO: Abhi — add screenshots
      ],
    },
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    year: "2024",
    tagline:
      "A TypeScript storefront with product pages, a cart, and demo checkout.",
    description:
      "A frontend storefront built with Next.js, React, and TypeScript. It uses Context API for the cart and includes product search and a demo checkout.",
    cover: "/images/projects/ecommerce-platform.png",
    tech: ["Next.js", "React.js", "TypeScript", "Context API", "Tailwind CSS"],
    liveUrl: "https://e-commerce-platform-wine-nine.vercel.app/",
    repoUrl: "https://github.com/Abhi15122/E-commerce-Platform",
    detail: {
      overview:
        "A frontend e-commerce project where users can browse a static product catalogue, manage a cart, and try a demo checkout.",
      problem:
        "I built this to practice TypeScript, dynamic product routes, and shared cart state in React.",
      solution:
        "Next.js handles product routes, while React Context API manages the cart and localStorage stores its contents. The checkout validates customer details and opens a confirmation page. Product pages use next/image and show feedback when an item is added to the cart.",
      results:
        "Deployed on Vercel with product browsing, search, cart controls, and a demo checkout. Checkout does not process payments or create real orders.",
      screenshots: [
        // TODO: Abhi — add screenshots
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
