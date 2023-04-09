import React from "react";
import { card } from "./syllabusData";
import { Flex, Button, Box, Text, Heading, Container } from "@chakra-ui/react";
import Link from "next/link";
import Wrapper from "./Wrapper";

export default function CoreSyllabus() {
  return (
    <>
      <Box bgColor="blackAlpha.100">
        <Wrapper spaceSm="5" spaceMd="20">
          <Flex
            minH="100vh"
            flexDir="column"
            id="Syllabus"
            pb={16}
            width="90%"
            m="auto"
          >
            <Box my="auto">
              <Heading
                textAlign="center"
                mt={20}
                fontSize={["4xl", "4xl", "6xl"]}
                m={["10", "20", "120"]}
              >
                Syllabus
              </Heading>
              <Box mb={["3rem"]}>
                <Heading as="h2">Core Courses </Heading>
                <Text as="h1" fontSize={["2xl", "4xl"]}>
                  (Common in all specialization)
                </Text>
                <Text fontSize={["xl"]}>
                  Every participant of the program will start by completing the
                  following two core courses:
                </Text>
              </Box>

              <Flex flexDir={["column", "column", "row"]} gap={6}>
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
                    alignSelf="end"
                  >
                    <Heading>{data.heading}</Heading>
                    <Text fontSize={["2xl"]} fontWeight={400}>
                      {data.subHeading}
                    </Text>
                    <Text fontWeight={400}>{data.Text} </Text>
                    <Link href={data.href}>
                      <Button
                        mt={6}
                        _hover={{ bg: "green.500", color: "white" }}
                        size={["md", "lg"]}
                        border="2px"
                        borderColor="green.500"
                      >
                        Learn more
                      </Button>
                    </Link>{" "}
                  </Container>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Wrapper>
      </Box>
    </>
  );
}
