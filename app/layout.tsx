import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martins Wasami | Portfolio",
  description: "Martins Wasami is a ReactJS/NextJS Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem ] -z-10"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] w-[50rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
