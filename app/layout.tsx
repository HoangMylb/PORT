import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-sans-3";
import localFont from "next/font/local";
import "./styles.css";
import "./overrides.css";
import type { Metadata } from "next";

const cubano = localFont({
  src: "../public/fonts/iCielBCCubano-Normal.otf",
  variable: "--font-cubano",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hoangmy-portfolio.vercel.app"
  ),
  title: {
    default: "Hoàng Mỹ — Frontend-leaning Full-stack Developer",
    template: "%s | Hoàng Mỹ"
  },
  description:
    "Frontend-leaning full-stack developer building polished React experiences and dependable .NET product systems.",
  keywords: [
    "Hoàng Mỹ",
    "Frontend-leaning Full-stack Developer",
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
    title: "Hoàng Mỹ — Frontend-leaning Full-stack Developer",
    description:
      "Frontend-leaning full-stack developer building polished React experiences and dependable .NET product systems.",
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
      "Frontend-leaning full-stack developer building polished React experiences and dependable .NET product systems.",
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
    <html lang="en" className={cubano.variable}>
      <body>{children}</body>
    </html>
  );
}
