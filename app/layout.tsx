import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-sans-3";
import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hoangmy-portfolio.vercel.app"
  ),
  title: {
    default: "Hoàng Mỹ — Frontend Specialist",
    template: "%s | Hoàng Mỹ"
  },
  description:
    "React and Next.js developer building polished, product-focused digital experiences.",
  keywords: [
    "Hoàng Mỹ",
    "Frontend Specialist",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "UI/UX",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Hoàng Mỹ", url: "https://github.com/HoangMylb" }],
  creator: "Hoàng Mỹ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hoàng Mỹ — Portfolio",
    title: "Hoàng Mỹ — Frontend Specialist",
    description:
      "React and Next.js developer building polished, product-focused digital experiences.",
    images: [
      {
        url: "/images/hoang-my.jpg",
        width: 1200,
        height: 630,
        alt: "Hoàng Mỹ — Frontend Specialist"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng Mỹ — Frontend Specialist",
    description:
      "React and Next.js developer building polished, product-focused digital experiences.",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
