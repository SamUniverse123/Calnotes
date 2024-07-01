import type { Metadata } from "next";
import { Montserrat ,Bricolage_Grotesque} from "next/font/google";
import "../../globals.css";

import clsx from "clsx";
import AdminHeader from "@/components/shared/AdminHeader";



const inter =  Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calnotes Admin",
  description: "Admin page ",
};

export default function RootLayout({
  edit,
  children,
}: Readonly<{
  edit: React.ReactNode
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <AdminHeader/>
        {edit}
        {children}
      </body>
    </html>
  );}