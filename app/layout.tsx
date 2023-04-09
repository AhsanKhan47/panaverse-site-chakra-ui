"use client";

import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";
import { Chivo, Montserrat, Nunito } from "@next/font/google";

const chivoFont = Nunito({
  subsets: ["latin"],
  weight: ["500"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={chivoFont.className}>
        <ChakraProvider>
          <Box overflowX="hidden">
            <Navbar />
            {children}
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
