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
import Wrapper from "./Wrapper";

export default function Outcome() {
  return (
    <>
      <Wrapper spaceSm="0" spaceMd="0">
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mt={["6rem", "5rem", "5rem"]}
        >
          About Program
        </Heading>
        <Flex
          w={["90%", "90%", "90%"]}
          flexDir={["column", "column", "row"]}
          justify="space-between"
          id="aboutProgram"
          gap={["3rem", "1rem"]}
          my="5rem"
          mx="auto"
          height="full"
        >
          <Box maxW={["70%", "50%"]}>
            <Image
              objectFit="cover"
              alt="panaverselogo"
              src={`/programmerguy.png`}
              zIndex={10}
            />
          </Box>
          <Box mt={["0", "0", "auto", "auto"]}>
            <Heading fontSize={["xl", "3xl", "4xl"]}>
              The Program in a Nutshell: Earn While You Learn
            </Heading>
            <Text my={["1rem", "2rem"]} fontSize={["lg", "xl", "2xl"]}>
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
      </Wrapper>
    </>
  );
}
