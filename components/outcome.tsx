import React from "react";
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
export default function Outcome() {
  return (
    <>
      <Flex
        w={["100%", "100%", "90%"]}
        flexDir={["column", "column", "row"]}
        minH="90vh"
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
          <Heading fontSize={["xl", "2xl", "3xl"]}>
            The Program in a Nutshell: Earn While You Learn
          </Heading>
          <Text my={["1rem", "2rem"]}>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
          <Link href="https://portal.piaic.org/signup">
            {" "}
            <Button>Join now</Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
