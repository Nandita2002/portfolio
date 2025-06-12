import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nandita Mahesh",
  description: "Software Developer | Web Developer | Open Source Enthusiast",
  keywords: "Nandita Mahesh, Software Engineer, Web Developer, Portfolio",
  openGraph: {
    title: "Nandita Mahesh - Portfolio",
    description: "Software Developer | Web Developer | Open Source Enthusiast",
    url: "https://yourdomain.com",
    siteName: "Nandita Mahesh",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandita Mahesh - Portfolio",
    description: "Software Developer | Web Developer | Open Source Enthusiast",
    images: ["https://yourdomain.com/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
