import React from "react";

import { Flex, Button, Box, Heading, Image } from "@chakra-ui/react";
import Social from "../components/Icons";
import Wrapper from "./Wrapper";
import Link from "next/link";
export default function Hero() {
  return (
    <Wrapper>
      <Flex
        as="header"
        w="90%"
        m="auto"
        h={["80vh", "100vh", "100vh", "100vh"]}
        flexDir={["column-reverse", "column-reverse", "row"]}
        align="flex-start"
        justify="space-between"
        mt={["4rem", "4", "0", "0"]}
      >
        <Box
          w={["100%", "100%", "60%", "60%"]}
          textAlign="start"
          my={["2rem", "auto"]}
        >
          <Heading as="h1" size={["lg", "2xl", "2xl", "2xl"]} mb="1rem">
            Panaverse
          </Heading>
          <Heading as="h2" size={["lg", "2xl", "2xl", "2xl"]}>
            Certified Web 3.0 and Metaverse Developer
          </Heading>
          <Heading
            as="h4"
            size={["sm", "md", "lg", "lg"]}
            mt={["2", "2", "12", "0"]}
          >
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </Heading>
          <Link href="#Courses">
            <Button
              mt="6"
              _hover={{ bg: "green.500", color: "white" }}
              size={["md", "lg"]}
            >
              View Courses
            </Button>
          </Link>
          <Social />
        </Box>

        <Box
          w={["40%", "40%", "30%", "20%"]}
          mt="4"
          m={["auto"]}
          mb={["0", "auto"]}
        >
          <Image
            objectFit="cover"
            alt="panaverselogo"
            src={`/red-p-logo-2.png`}
            zIndex={10}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
}
