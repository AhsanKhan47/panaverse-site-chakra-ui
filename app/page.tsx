"use client";
import { Image } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import { Text } from "@chakra-ui/react";
import Syllabus from "@/components/CoreCourse";
import Q1 from "@/components/web3/q1";
import Outcome from "@/components/outcome";
import Courses from "@/components/courses";
export default function Home() {
  return (
    <div>
      <Hero />
      <Outcome />
      <Syllabus />
      <Courses />
    </div>
  );
}
