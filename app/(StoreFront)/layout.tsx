import type { Metadata } from "next";
import { Montserrat ,Bricolage_Grotesque} from "next/font/google";
import "../globals.css";
import TopHeader from "@/components/shared/topHeader";
import clsx from "clsx";
import Footer from "@/components/shared/Footer";

const inter =  Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calnotes",
  description: "Concise and ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <TopHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
