import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhi Verma — Full-Stack Web Developer",
  description:
    "Abhi Verma is a Full-Stack Web Developer based in Delhi, India. B.Tech (ECE) at MAIT, graduating June 2026. Building with React, Next.js, Node.js, Express, and MongoDB.",
  metadataBase: new URL("https://abhinav-portfolio.vercel.app"),
  openGraph: {
    title: "Abhi Verma — Full-Stack Web Developer",
    description: "Portfolio of Abhi Verma. Full-Stack Web Developer. MAIT '26.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen bg-canvas text-ink">
        <Providers>
          <NoiseOverlay />
          {children}
        </Providers>
      </body>
    </html>
  );
}
