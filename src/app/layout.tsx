import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TheatricalMotionConfig } from "@/components/animations/TheatricalComponents";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Dutch Queen - Premier Queen Tribute Band",
  description: "Experience the magic of Queen with The Dutch Queen - Professional tribute band offering full band and acoustic performances for events across Europe. Royal elegance meets rock energy in our theatrical performances.",
  keywords: "Queen tribute band, Netherlands, live music, tribute show, Freddie Mercury, Brian May, royal performance, theatrical show, acoustic performance, full band experience",
  openGraph: {
    title: "The Dutch Queen - Premier Queen Tribute Band",
    description: "Royal elegance meets rock energy - Experience Queen's greatest hits with theatrical flair",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#d4af37" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-black text-pearl-white`}
      >
        <TheatricalMotionConfig>
          {children}
        </TheatricalMotionConfig>
      </body>
    </html>
  );
}
