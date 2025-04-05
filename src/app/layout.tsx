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
  title: "Shop Quality Products Online | Fast Shipping & Great Deals",
  description: "Discover top-rated products at unbeatable prices. Enjoy fast shipping, secure checkout, and exclusive deals on electronics, fashion, home goods & more.",
};

export default function RootLayout({
  children,
  navbar,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="next-size-adjust" content="0" />
      </head>
      <body className={`${geistSans.variable}${geistMono.variable}`}>
        {navbar}
        <br />
        {children}
      </body>
    </html>
  );
}
