"use client";
import React from "react";
import Social from "../components/Icons";

import { Flex, Box, Text, Center, Divider, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

export default function Footer() {
  return (
    <RevealWrapper
      origin="bottom"
      delay={200}
      duration={1000}
      distance="80px"
      reset={true}
    >
      <Box bgColor={"gray.300"}>
        <Divider />
        <Flex
          gap={6}
          w="90%"
          m="auto"
          p={["2rem"]}
          align={["self-start", "self-start", "center"]}
          justify="center"
          flexDir={["column", "column", "row"]}
        >
          {" "}
          <Box w={["90%", "40%"]}>
            <VStack align={["start", "self-start"]}>
              <Image
                height={150}
                width={150}
                alt="panaverselogo"
                src={`/panaverse_transparent_small.png`}
              />
              <Text>
                Getting Ready for the Next Generation and Future of the Internet
                - Join a 13 Trillion Dollar Industry with 5 Billion Users{" "}
              </Text>
            </VStack>
          </Box>
          <Box w={["90%", "30%"]}>
            <VStack align={["start", "self-start"]}>
              <Text as="h1" fontWeight={600} fontSize="2xl">
                Courses
              </Text>
              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`#aboutProgram`}
              >
                About Program
              </Link>
              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`#Syllabus`}
              >
                Syllabus
              </Link>
              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`/wmd`}
              >
                Home
              </Link>
            </VStack>
          </Box>
          <Box w={["90%", "30%"]}>
            <VStack align={["start", "start"]}>
              <Text as="h1" fontWeight={600} fontSize="2xl">
                {" "}
                Courses
              </Text>

              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`/wmd`}
              >
                Web 3.0 and Metaverse{" "}
              </Link>
              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`/ai`}
              >
                Artificial Intelligence and Deep Learning
              </Link>
              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`/cnac`}
              >
                Cloud-Native Computing
              </Link>
              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`/aciot`}
              >
                Ambient Computing and IoT
              </Link>
              <Link
                // _hover={{
                //   color: "green.500",
                //   textDecoration: "underline",
                // }}
                href={`/gb`}
              >
                Genomics and Bioinformatics
              </Link>
            </VStack>
          </Box>
        </Flex>
        <Divider w="90%" m="auto" />
        <Center>
          <Box m="auto" mt={["2rem"]}>
            <Social />
          </Box>
        </Center>
        <Center>
          {" "}
          <Text mb={["2rem"]}>© Panaverse All rights reserved</Text>
        </Center>
      </Box>
    </RevealWrapper>
  );
}
