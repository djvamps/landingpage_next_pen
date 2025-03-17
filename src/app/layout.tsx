"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton"; // Importa el botón
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });


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
       
       <meta name="google-site-verification" content="xIiLIUqqWxzZ6XSXF7YQ-GKiOKmlUnUdIrTsd3fnceg" />
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>

        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppButton /> {/* Agrega el botón aquí */}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
