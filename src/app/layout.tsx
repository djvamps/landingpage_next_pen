"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton"; // Importa el botón
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Script from "next/script"; // 👈 Importamos el componente Script
import { Providers } from "./providers";


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
       
<<<<<<< HEAD
       <meta name="google-site-verification" content="xIiLIUqqWxzZ6XSXF7YQ-GKiOKmlUnUdIrTsd3fnceg" />
=======
      <meta name="google-site-verification" content="xIiLIUqqWxzZ6XSXF7YQ-GKiOKmlUnUdIrTsd3fnceg" />
      
>>>>>>> 01f145e (actualizacion de informacion)
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>

        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppButton /> {/* Agrega el botón aquí */}
        </Providers>

         {/* Google Analytics */}
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1BDY2J5917"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1BDY2J5917');
          `}
        </Script>
      </body>
    </html>
  );
}


