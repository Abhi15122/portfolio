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
    slug: "airbnb-clone",
    title: "Airbnb Clone",
    year: "2025",
    tagline: "Full-stack rental platform — auth, listings, bookings, image uploads.",
    description:
      "End-to-end rental platform built with Next.js App Router on the frontend and an Express.js REST API on the backend. JWT auth, MongoDB Atlas data, and Cloudinary image pipeline.",
    cover: "/images/projects/airbnb-clone.png",
    tech: ["Next.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "Cloudinary", "Tailwind"],
    liveUrl: "https://airbnb-fullstack-orcin.vercel.app/",
    repoUrl: "https://github.com/Abhi15122/airbnb-fullstack-",
    detail: {
      overview:
        "A production-style rental platform clone. Frontend is Next.js App Router; backend is a separate Express.js REST API talking to MongoDB Atlas. The two halves are wired with JWT auth and Cloudinary for image uploads.",
      problem:
        "Most clones stop at the UI. I wanted the full loop: real auth, a real schema, real validation, and a backend that doesn't crumble the moment two users book the same listing.",
      solution:
        "Designed 10+ REST endpoints covering auth, listings, and bookings — each with validation and error handling. JWT with bcrypt hashing for credentials, Express middleware for protected routes. Bookings model uses MongoDB date-range overlap queries (lt/gt) so double bookings are rejected at the data layer, not the UI layer. Users, Listings, and Bookings are Mongoose models linked by ObjectId refs and .populate(). Image uploads go through Cloudinary with .env-secured API keys.",
      results:
        "End-to-end rental flow works in production. Search → detail → date selection → booking → confirmation. Auth-protected dashboard for listing management. Deployed to Vercel.",
      screenshots: [
        // TODO: Abhi — add screenshots into public/images/projects/ and reference here
      ],
    },
  },
  {
    slug: "ganesh-auto-spare-hubs",
    title: "Ganesh Auto Spare Hubs",
    year: "2025",
    tagline: "Freelance SSR site for a local auto-spares business.",
    description:
      "SEO-optimized Next.js site shipped end-to-end for a paying freelance client. SSR for crawlability, Tailwind for the design system, EmailJS for the inquiry form.",
    cover: "/images/projects/ganesh-auto-spare-hubs.png",
    tech: ["Next.js", "React.js", "Tailwind CSS", "SSR", "EmailJS"],
    liveUrl: "https://ganesh-auto-spare-hub-qfse.vercel.app/",
    repoUrl: null,
    detail: {
      overview:
        "A freelance project for a local auto-spares retailer that needed a fast, search-friendly online presence. Delivered the brief end-to-end — requirements, design choices, build, deploy.",
      problem:
        "The client needed a site Google could actually index, a way for customers to send inquiries without a backend, and a layout that looked professional on mobile and desktop with no maintenance overhead.",
      solution:
        "Built on Next.js with server-side rendering so every page is crawlable. Modular UI in React + Tailwind CSS. Dynamic routing with Next.js Link prefetching for instant in-site navigation. EmailJS API hooked up to the inquiry form, which means real-time customer messages land in the client's inbox with zero backend infrastructure to run.",
      results:
        "Live on Vercel. Owner gets inquiries directly to email. SEO baseline in place — page metadata, structured headings, image alts.",
      screenshots: [
        // TODO: Abhi — add screenshots
      ],
    },
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    year: "2024",
    tagline: "Storefront with cart, dynamic routing, and TypeScript end-to-end.",
    description:
      "Full-stack e-commerce storefront built with Next.js, React, and TypeScript. Cart state via Context API, Tailwind UI, image-optimized product pages.",
    cover: "/images/projects/ecommerce-platform.png",
    tech: ["Next.js", "React.js", "TypeScript", "Context API", "Tailwind CSS"],
    liveUrl: "https://e-commerce-platform-wine-nine.vercel.app/",
    repoUrl: "https://github.com/Abhi15122/E-commerce-Platform",
    detail: {
      overview:
        "A full-stack e-commerce storefront. Browse products, drop them in the cart, run through a flow that feels like a real shop.",
      problem:
        "I wanted to get TypeScript-fluent and ship something with proper state — a cart that survives navigation, product pages that load fast, and a layout that holds up at every breakpoint.",
      solution:
        "Next.js App Router for dynamic product routes. React Context API for cart state shared across the tree. Tailwind for responsive UI. next/image for optimized product imagery. react-toastify for real-time add-to-cart feedback. Full TypeScript coverage from components down to product data.",
      results:
        "Live on Vercel. Cart persists during the session, product pages load fast, mobile experience matches desktop.",
      screenshots: [
        // TODO: Abhi — add screenshots
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
