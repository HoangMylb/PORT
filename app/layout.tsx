import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-sans-3";
import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hoangmy-portfolio.vercel.app"
  ),
  title: {
    default: "Hoàng Mỹ — Frontend-leaning Full-stack Developer",
    template: "%s | Hoàng Mỹ"
  },
  description:
    "Frontend-leaning full-stack developer building, debugging, integrating, testing and shipping focused improvements for production web systems.",
  keywords: [
    "Hoàng Mỹ",
    "Frontend-leaning Full-stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    ".NET",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Hoàng Mỹ", url: "https://github.com/HoangMylb" }],
  creator: "Hoàng Mỹ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hoàng Mỹ — Portfolio",
    title: "Hoàng Mỹ — Frontend-leaning Full-stack Developer",
    description:
      "Frontend-leaning full-stack developer building, debugging, integrating, testing and shipping focused improvements for production web systems.",
    images: [
      {
        url: "/images/hoang-my.jpg",
        width: 1200,
        height: 630,
        alt: "Hoàng Mỹ — Frontend-leaning Full-stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng Mỹ — Frontend-leaning Full-stack Developer",
    description:
      "Frontend-leaning full-stack developer building, debugging, integrating, testing and shipping focused improvements for production web systems.",
    images: ["/images/hoang-my.jpg"],
    creator: "@HoangMylb"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};
