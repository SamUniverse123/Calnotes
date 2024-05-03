import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/shared/topHeader";
import clsx from "clsx";
import Footer from "@/components/shared/Footer";






const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calnotes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)} >
        
        
        <TopHeader/>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
