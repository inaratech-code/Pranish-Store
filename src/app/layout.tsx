import type { Metadata } from "next";
import { Inter, Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";
import { AmbientBackground } from "@/components/ambient-background";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const calligraphy = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-calligraphy" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pranishstore.com"),
  title: {
    default: "Pranish Store | Kathmandu’s Trusted Trending Store",
    template: "%s | Pranish Store",
  },
  description:
    "Kathmandu’s trusted premium store for viral tech & lifestyle picks. Fast delivery across Nepal, COD available, secure checkout.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Pranish Store | Kathmandu’s Trusted Trending Store",
    description:
      "Premium viral products with fast delivery across Nepal. COD, eSewa & Khalti supported.",
    url: "/",
    siteName: "Pranish Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranish Store",
    description:
      "Kathmandu’s trusted premium store for viral tech & lifestyle picks. COD available across Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${calligraphy.variable} font-sans antialiased bg-background text-foreground`}
      >
        <AmbientBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
