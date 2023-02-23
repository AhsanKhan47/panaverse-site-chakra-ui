"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import { Text } from "@chakra-ui/react";
import Syllabus from "@/components/CoreCourse";
import Q1 from "@/components/web3/q1";

export default function Home() {
  return (
    <div>
      <Hero />
      <Syllabus />
    </div>
  );
}
