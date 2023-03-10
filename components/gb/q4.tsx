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
  Center,
  Spacer,
  Heading,
  ListItem,
  OrderedList,
  Image,
  Container,
} from "@chakra-ui/react";
export default function Q4() {
  return (
    <>
      <Box w="100%" m="auto" py="2rem">
        <Flex
          fontSize="xl"
          minH="80vh"
          flexDir="column"
          justify="space-around"
          align="start"
          w="100%"
        >
          <Heading>Quarter IV</Heading>
          <Heading fontSize={"2xl"}>Bio-351: Python for Biologists</Heading>
          <Text>Course Description:</Text>
          <Text w={["100%", "100%", "80%"]} fontSize={["md", "lg", "xl"]}>
            This course will focus on learning the basics of the Python
            programming language through genomics examples.
            <br />
            Textbook :{" "}
            <Link href="https://www.pythonforbiologists.org/">
              https://www.pythonforbiologists.org/
            </Link>
            <br />
          </Text>
        </Flex>
      </Box>
    </>
  );
}
