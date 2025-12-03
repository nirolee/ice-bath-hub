import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ice Bath Hub - Best Ice Bath Tubs & Cold Plunge Reviews 2024",
  description: "Expert reviews and buying guides for ice bath tubs, cold plunge pools, and recovery equipment. Find the perfect cold therapy solution for your needs.",
  keywords: "ice bath, cold plunge, ice bath tub, recovery, cold therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
