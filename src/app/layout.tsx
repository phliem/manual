import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Loading custom font
const ttnorms = localFont({
  src: "../font/TTNorms-Regular.woff",
  variable: "--font-ttnorms",
});

export const metadata: Metadata = {
  title: "Manual: Men's Healthcare - Made easy",
  description:
    "No waiting rooms or awkward conversations. Clinically proven treatments to your door. The most effective treatments. Backed by science. 365-Day Patient Support. Subscription Service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ttnorms.variable} font-body overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
