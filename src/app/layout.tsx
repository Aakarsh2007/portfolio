import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const siteTitle = "Aakarsh Saxena — Software Engineer · AI Agents & Full-Stack";
const siteDescription =
  "Aakarsh Saxena, B.Tech IT at IIIT Lucknow. Builds reliable LLM agents and production full-stack systems — RevPilot AI, Aegis, Oceanus. LeetCode Knight, Codeforces Specialist, CodeChef Global Rank 4.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Aakarsh Saxena",
    "Software Engineer",
    "SDE Intern",
    "Backend Engineer",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "LLM Agents",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "Python",
    "IIIT Lucknow",
  ],
  authors: [{ name: "Aakarsh Saxena" }],
  creator: "Aakarsh Saxena",
  metadataBase: new URL("https://portfolio-sigma-lime-94.vercel.app"),
  openGraph: {
    type: "profile",
    url: "https://portfolio-sigma-lime-94.vercel.app",
    locale: "en_US",
    title: siteTitle,
    description: siteDescription,
    siteName: "Aakarsh Saxena",
    images: [{ url: "/aakarsh-saxena.jpg", width: 450, height: 554, alt: "Aakarsh Saxena" }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/aakarsh-saxena.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#050508] text-[#e8eaf0] antialiased overflow-x-hidden noise">
        {children}
      </body>
    </html>
  );
}
