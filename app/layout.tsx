import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BiDIT",
  description: "O mercado mais seguro para licitar, vender e ganhar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer>
          <div className="bg-gray-100 w-full flex flex-col items-center py-10">
            <p className="text-gray-500 text-sm mt-10">Copyright © 2026 BiDIT.</p>
            <p className="text-gray-500 text-sm">All rights reserved.</p>
          </div>
          <div className="w-full h-20 bg-gray-800 flex items-center justify-center">
            <p className="text-gray-400 text-sm">Created by Finéias Jilaiassule</p>
          </div>
        </footer>
      </body>
    </html>
  );
}