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
  title: "Kikelomo Lawal — Environmental Advocate & Run Leader",
  description:
    "Run Leader, CleanAir360 Founder, WaveWise Co-Founder in Lagos, Nigeria.",
  keywords: [
    "Kikelomo Lawal",
    "Air Quality Girl",
    "air quality Lagos",
    "CleanAir360",
    "WaveWise",
    "UrbanBetter run leader",
    "environmental researcher Nigeria",
    "climate content creator",
  ],
  openGraph: {
    title: "Kikelomo Lawal — Air Quality Girl",
    description:
      "Environmental advocate, community observer, run leader, and  based in Lagos.",
    url: "https://allahspec.com",
    siteName: "Kikelomo Lawal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
