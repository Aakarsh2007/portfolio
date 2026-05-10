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

export const metadata: Metadata = {
  title: "Aakarsh Saxena — Software Engineer & AI Systems Builder",
  description:
    "Building scalable AI systems, multi-agent environments, and production-grade web applications. Full-Stack Developer at IIIT Lucknow.",
  keywords: [
    "Aakarsh Saxena",
    "Software Engineer",
    "AI Systems",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Machine Learning",
    "IIIT Lucknow",
  ],
  authors: [{ name: "Aakarsh Saxena" }],
  creator: "Aakarsh Saxena",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aakarsh Saxena — Software Engineer & AI Systems Builder",
    description:
      "Building scalable AI systems, multi-agent environments, and production-grade web applications.",
    siteName: "Aakarsh Saxena Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakarsh Saxena — Software Engineer & AI Systems Builder",
    description:
      "Building scalable AI systems, multi-agent environments, and production-grade web applications.",
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
