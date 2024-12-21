"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51992870423" // Reemplaza con tu número de WhatsApp en formato internacional
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48a10 10 0 00-14.13 0c-3.76 3.75-3.9 9.72-1.26 13.92l-1.33 4.87a1 1 0 001.23 1.23l4.87-1.33a10.08 10.08 0 0013.93-1.26 10 10 0 000-14.13zm-1.41 12.72a8.07 8.07 0 01-10.65.95.5.5 0 00-.47-.07l-3.14.85.85-3.14a.5.5 0 00-.07-.47 8.07 8.07 0 01.95-10.65 8 8 0 0111.35 11.35zm-2.11-2.11a6.28 6.28 0 00.78-1.39.51.51 0 00-.08-.57l-1.69-1.69a.51.51 0 00-.54-.09 4.42 4.42 0 01-1.75.49.49.49 0 01-.47-.27l-.71-1.42a.52.52 0 00-.31-.27c-.59-.2-1.35-.46-1.78-.28s-.68.77-.77 1.08a1.66 1.66 0 00.3 1.56c.08.1.15.17.23.25s.21.18.31.27c.48.39 1.13.89 1.9 1.13a5.42 5.42 0 002.47.16c.66-.16 1.13-.53 1.41-.85z" />
      </svg>
    </a>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
       
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>

        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
