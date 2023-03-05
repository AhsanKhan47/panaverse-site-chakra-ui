import React from "react";
import {
  Flex,
  Button,
  Box,
  Link,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

export default function Outcome() {
  return (
    <>
      <RevealWrapper
        origin="top"
        delay={200}
        duration={1000}
        distance="80px"
        reset={true}
      >
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mt={["6rem", "5rem", "5rem"]}
        >
          About Program
        </Heading>
        <Flex
          w={["100%", "100%", "90%"]}
          flexDir={["column", "column", "row"]}
          minH="100vh"
          justify="space-between"
          id="aboutProgram"
        >
          <Box maxW={["70%", "50%"]} m="auto">
            <Image
              objectFit="cover"
              alt="panaverselogo"
              src={`/programmerguy.jpg`}
              zIndex={10}
            />
          </Box>
          <Box w={["90%", "90%"]} m="auto" mt={["0", "0", "auto", "auto"]}>
            <Heading fontSize={["xl", "2xl", "4xl"]}>
              The Program in a Nutshell: Earn While You Learn
            </Heading>
            <Text my={["1rem", "2rem"]} fontSize={["lg"]}>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program's beginning. It resembles a
              cross between a corporate venture and an educational project.
            </Text>
            <Link href="https://portal.piaic.org/signup" target="_blank">
              {" "}
              <Button
                _hover={{ bg: "green.500", color: "white" }}
                size={["md", "lg"]}
              >
                Join now
              </Button>
            </Link>
          </Box>
        </Flex>
      </RevealWrapper>
    </>
  );
}
