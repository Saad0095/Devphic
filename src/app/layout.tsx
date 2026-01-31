import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "../app/provider"
import Script from "next/script";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Inter } from 'next/font/google'

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
  verification: {
    google: "pNY7AokCGmYrhK5wkwchkb49vG0tYTQpsOChDYLE8TQ",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
