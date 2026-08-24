import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-sans-3";
import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoàng Mỹ — Frontend Specialist",
  description:
    "React and Next.js developer building polished, product-focused digital experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
