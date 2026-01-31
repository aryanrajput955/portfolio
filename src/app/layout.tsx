import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Aryan Rajput | Full Stack Developer & CS Engineer",
  description: "Portfolio of Aryan Rajput, a passionate Full Stack Developer and Computer Science Engineer specializing in building performant and beautiful web experiences using React, Next.js, and Node.js.",
  keywords: ["Aryan Rajput", "Full Stack Developer", "Computer Science Engineer", "Web Developer", "React Developer", "Next.js Portfolio", "Software Engineer"],
  authors: [{ name: "Aryan Rajput" }],
  alternates: {
    canonical: "https://aryanrajput.dev",
  },
  openGraph: {
    title: "Aryan Rajput | Full Stack Developer & CS Engineer",
    description: "Full Stack Developer specializing in building performant and beautiful web experiences.",
    url: "https://aryanrajput.dev",
    siteName: "Aryan Rajput Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Rajput | Full Stack Developer & CS Engineer",
    description: "Full Stack Developer specializing in building performant and beautiful web experiences.",
    creator: "@aryanrajput955", // Using GitHub handle as placeholder if twitter unknown
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import MovingLine from "@/components/MovingLine";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6275f792-c0b9-4044-b606-c47edc95f19e"
        />
        <SmoothScroll>
          <Navbar />
          <MovingLine />
          {children}
        </SmoothScroll>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
