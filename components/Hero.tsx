import React from "react";
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
  Link,
  Text,
  Spacer,
  Heading,
  Image,
} from "@chakra-ui/react";
import Social from "../components/Icons";
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
      mt={["2", "24", "0", "0"]}
    >
      <Box w={["100%", "100%", "60%", "60%"]} textAlign="start" m="auto ">
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
        <Button mt="6">View Courses</Button>
        <Social />
      </Box>

      <Box w={["40%", "50%", "20%", "20%"]} mt="4" m={["auto"]}>
        <Image
          objectFit="cover"
          alt="panaverselogo"
          src={`/logos/red-p-logo.png`}
          zIndex={10}
        />
      </Box>
    </Flex>
  );
}