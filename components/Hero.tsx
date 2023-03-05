import React from "react";

import { Flex, Button, Box, Heading, Image } from "@chakra-ui/react";
import Social from "../components/Icons";
import { RevealWrapper } from "next-reveal";

export default function Hero() {
  return (
    <Flex
      as="header"
      w="90%"
      m="auto"
      h={["80vh", "100vh", "100vh", "100vh"]}
      flexDir={["column-reverse", "column-reverse", "row"]}
      align="flex-start"
      justify="space-between"
      mt={["2", "4", "0", "0"]}
    >
      <Box
        w={["100%", "100%", "60%", "60%"]}
        textAlign="start"
        m="auto "
        mt={["8", "auto"]}
      >
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="200px"
          reset={true}
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
          <Button
            mt="6"
            _hover={{ bg: "green.500", color: "white" }}
            size={["md", "lg"]}
          >
            View Courses
          </Button>
          <Social />
        </RevealWrapper>
      </Box>

      <Box
        w={["40%", "40%", "30%", "20%"]}
        mt="4"
        m={["auto"]}
        mb={["0", "auto"]}
      >
        <RevealWrapper
          origin="right"
          delay={200}
          duration={1000}
          distance="200px"
          reset={true}
        >
          <Image
            objectFit="cover"
            alt="panaverselogo"
            src={`/logos/red-p-logo.png`}
            zIndex={10}
          />
        </RevealWrapper>
      </Box>
    </Flex>
  );
}
