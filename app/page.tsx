"use client";
import Hero from "@/components/Hero";
import Syllabus from "@/components/CoreCourse";
import Outcome from "@/components/outcome";
import Courses from "@/components/courses";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Hero />
      <Outcome />
      <Syllabus />
      <Courses />
      <Link href={`/home`}>go to lorem</Link>
    </div>
  );
}
