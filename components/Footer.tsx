"use client";
import React from "react";
import Social from "../components/Icons";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/Ai";
import { FaInstagramSquare, FaYoutube } from "react-icons/Fa";

import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
  Text,
  Center,
  Spacer,
  Fade,
  Collapse,
  useDisclosure,
  Grid,
  GridItem,
  Divider,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
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
              Getting Ready for the Next Generation and Future of the Internet -
              Join a 13 Trillion Dollar Industry with 5 Billion Users{" "}
            </Text>
          </VStack>
        </Box>
        <Box w={["90%", "30%"]}>
          <VStack align={["start", "self-start"]}>
            <Text as="h1" fontWeight={600} fontSize="2xl">
              Courses
            </Text>
            <Link href={`/wmd`}>Home</Link>
            <Link href={`/wmd`}>Home</Link>
            <Link href={`/wmd`}>Home</Link>
          </VStack>
        </Box>
        <Box w={["90%", "30%"]}>
          <VStack align={["start", "start"]}>
            <Text as="h1" fontWeight={600} fontSize="2xl">
              {" "}
              Courses
            </Text>

            <Link href={`/wmd`}>Web 3.0 and Metaverse </Link>
            <Link href={`/ai`}>Artificial Intelligence and Deep Learning</Link>
            <Link href={`/cdn`}>Cloud-Native Computing</Link>
            <Link href={`/iot`}>Ambient Computing and IoT</Link>
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
  );
}
