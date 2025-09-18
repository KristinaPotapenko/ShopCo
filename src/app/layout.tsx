import type { Metadata } from "next";

import { montserrat, dmSans } from "@/components/ui/fonts";

import AnnouncementBar from "@/components/sections/AnnouncementBar/AnnouncementBar";
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";

import "./globals.css";
import ReduxProvider from "@/components/Providers/ReduxProvider";

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
      <body
        className={`${montserrat.variable} ${dmSans.variable} antialiased font-dm text-sm md:text-base font-light bg-white`}
      >
        <ReduxProvider>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
