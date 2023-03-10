"use client";

import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import "../app/globals.css";
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
      <body>
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
