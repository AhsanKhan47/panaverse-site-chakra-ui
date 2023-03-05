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
  UnorderedList,
  Image,
  Container,
} from "@chakra-ui/react";
export default function Q5() {
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
        >s
          <Heading>Quarter V</Heading>
          <Heading fontSize={"2xl"} my={8} w="90%">
            Bio-361: Bioinformatics with Python
          </Heading>
          <Text fontWeight={600}>Duration: 13 Weeks</Text>
          <Text fontWeight={600}>Course Description:</Text>
          <Text w={["100%", "100%", "80%"]} fontSize={["md", "lg", "xl"]}>
            In this course we will discover modern, next-generation sequencing
            libraries from the powerful Python ecosystem to perform cutting-edge
            research and analyze large amounts of biological data. <br />
            Textbook:{" "}
            <Link href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1">
              https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1
            </Link>
          </Text>
        </Flex>
      </Box>
    </>
  );
}
