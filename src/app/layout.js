import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/common/navbar';
import Footer from "@/components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 w-full h-16 z-40 bg-gradient-to-b pointer-events-none" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
