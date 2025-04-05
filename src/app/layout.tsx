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
  title: "Shopping: For All and Safe",
  description: "We go shopping. Fun and Games",
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
