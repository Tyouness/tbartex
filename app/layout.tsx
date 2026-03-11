import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tbartex | Fil Textile Premium",
  description:
    "Tbartex accompagne les marques et industriels avec une offre fil premium, fiable et orientee execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-[#040405] text-[#ece9e3]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
