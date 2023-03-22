"use client";
import React from "react";
import Social from "../components/Icons";

import { Flex, Box, Text, Center, Divider, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bgColor={"gray.300"}>
      <Divider />
      <Flex
        gap={6}
        w="90%"
        m="auto"
        p={["0", "2rem"]}
        align={["self-start", "self-start", "self-start"]}
        justify="center"
        flexDir={["column", "column", "row"]}
      >
        {" "}
        <Box w={["90%", "90%", "90%", "40%"]}>
          <VStack align={["start", "self-start"]}>
            <Image
              height={150}
              width={150}
              alt="panaverselogo"
              src={`/panaverse_transparent_small.png`}
            />
            <Text _hover={{ color: "green.500", textDecoration: "underline" }}>
              Getting Ready for the Next Generation and Future of the Internet -
              Join a 13 Trillion Dollar Industry with 5 Billion Users{" "}
            </Text>
          </VStack>
        </Box>
        <Box w={["90%", "30%"]}>
          <VStack align={["start", "self-start"]}>
            <Text as="h1" fontWeight={600} fontSize="2xl">
              about
            </Text>
            <Link href={`/`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                About Program
              </Text>
            </Link>
            <Link href={`/`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                Syllabus
              </Text>
            </Link>
            <Link href={`/`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                Home
              </Text>
            </Link>
          </VStack>
        </Box>
        <Box w={["90%", "30%"]}>
          <VStack align={["start", "start"]}>
            <Text as="h1" fontWeight={600} fontSize="2xl">
              {" "}
              Courses
            </Text>

            <Link href={`/wmd`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                {" "}
                Web 3.0 and Metaverse{" "}
              </Text>{" "}
            </Link>
            <Link href={`/ai`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                {" "}
                Artificial Intelligence and Deep Learning
              </Text>{" "}
            </Link>
            <Link href={`/cnac`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                {" "}
                Cloud-Native Computing
              </Text>{" "}
            </Link>
            <Link href={`/aciot`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                {" "}
                Ambient Computing and IoT
              </Text>{" "}
            </Link>
            <Link href={`/gb`}>
              <Text
                _hover={{ color: "green.500", textDecoration: "underline" }}
              >
                {" "}
                Genomics and Bioinformatics
              </Text>{" "}
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
        <Text mb={["2rem"]}>
          © <strong>Panaverse</strong> All rights reserved
        </Text>
      </Center>
    </Box>
  );
}
