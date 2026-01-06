import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: "Devphic – Modern Web Development Agency",
    template: "%s | Devphic",
  },
  description:
    "Devphic is a modern digital agency offering MERN stack development, WordPress websites, and graphic design. We build fast, scalable, conversion-focused digital experiences.",
  keywords: [
    "MERN stack development",
    "web development agency",
    "React agency",
    "WordPress developers",
    "graphic design agency",
    "custom web applications",
  ],
  openGraph: {
    title: "Devphic – Modern Web Development Agency",
    description:
      "Custom MERN stack apps, WordPress websites, and high-end graphic design for startups and businesses.",
    url: "https://devphic.vercel.app",
    siteName: "Devphic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devphic Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devphic – Modern Web Development Agency",
    description:
      "We build scalable, high-performance websites using modern technologies.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
