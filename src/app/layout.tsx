import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Watch Pokemon Episodes Online",
  description:
    "Watch Pokemon episodes online at watch Pokemon episodes. Latest Pokemon Episodes and Pokemon Movies. Watch Pokemon Episode 1 Pokemon I Choose You",
  keywords: "pokemon episodes, watch pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
