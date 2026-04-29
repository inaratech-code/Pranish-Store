import type { Metadata } from "next";
import { Inter, Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const calligraphy = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-calligraphy" });

export const metadata: Metadata = {
  title: "Pranish Store | Kathmandu's Trusted Trending Store",
  description: "Order viral products directly from Pranish Store. Fast delivery, COD available, trusted seller in Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${outfit.variable} ${calligraphy.variable} font-sans antialiased bg-gray-50 dark:bg-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
