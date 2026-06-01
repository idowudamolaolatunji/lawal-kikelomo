import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kikelomo Lawal — Environmental Advocate & Developer",
  description:
    "Run Leader, CleanAir360 Founder, WaveWise Co-Founder, Frontend Developer. Lagos, Nigeria.",
  keywords: [
    "Kikelomo Lawal",
    "allahspec",
    "air quality Lagos",
    "CleanAir360",
    "WaveWise",
    "UrbanBetter run leader",
    "environmental researcher Nigeria",
    "climate content creator",
  ],
  openGraph: {
    title: "Kikelomo Lawal — allahspec",
    description:
      "Environmental advocate, community researcher, run leader, and frontend developer based in Lagos.",
    url: "https://allahspec.com",
    siteName: "Kikelomo Lawal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
