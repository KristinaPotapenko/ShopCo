import type { Metadata } from "next";

import { dmSans } from "@/components/ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "SHOP CO",
  description:
    "Online store offering stylish clothing for men and women: new arrivals, top sellers, fashion collections, and accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased font-light`}>
        {children}
      </body>
    </html>
  );
}
