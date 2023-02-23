import React from "react";
import { card } from "./syllabusData";
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
  Heading,
  Image,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
export default function Syllabus() {
  return (
    <>
      <Flex bgColor="blackAlpha.100" minH="100vh" flexDir="column">
        <Heading textAlign="center" mt={20}>
          Syllabus
        </Heading>
        <Box w={["90%"]} m="auto" mb={["3rem"]}>
          <Heading as="h2">Core Courses </Heading>
          <Text as="h1" fontSize={["2xl", "4xl"]}>
            (Common in all specialization)
          </Text>
          <Text fontSize={["xl"]}>
            Every participant of the program will start by completing the
            following two core courses:
          </Text>
        </Box>
        <Flex
          flexDir={["column", "column", "row"]}
          w={["90%"]}
          m="auto"
          gap={6}
        >
          {card.map((data) => (
            <Container
              cursor="pointer"
              transition=".2s all ease-in"
              _hover={{ bg: "rgba(0, 0, 0, 0.08)" }}
              w={["90%", "90%", "33%"]}
              bg="gray.200"
              color="gray.900"
              borderRadius={["md"]}
              px={["4"]}
              py={["3rem"]}
              key={data.id}
            >
              <Heading>{data.heading}</Heading>
              <Text fontSize={["2xl"]} fontWeight={400}>
                {data.subHeading}
              </Text>
              <Text fontWeight={400}>{data.Text} </Text>
              <Link href={data.href}>
                <Button mt={6}>Learn more</Button>
              </Link>{" "}
            </Container>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
