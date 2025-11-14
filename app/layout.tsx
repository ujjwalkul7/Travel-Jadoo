import "./globals.css";
import Header from "@/components/Header";
import type { ReactNode } from "react";
import { Volkhov } from "next/font/google"


export const metadata = {
  title: "Jadoo Travel",
  description: "Travel website UI with Next.js and Tailwind CSS",
};

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal and bold
})



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={volkhov.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
