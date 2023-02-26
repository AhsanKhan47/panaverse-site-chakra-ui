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
      <Box m="auto" py="2rem">
        <Flex
          fontSize="xl"
          minH="80vh"
          flexDir="column"
          justify="space-around"
          align="start"
          w="90%"
          m="auto"
        >
          <Heading>Quarter V</Heading>
          <Heading fontSize={"2xl"} my={8} w="90%">
            AC-361: Embedded Programming using C and Rust
          </Heading>
          <Text fontWeight={600}>Duration: 13 Weeks</Text>
          <Text fontWeight={600}>Course Description:</Text>
          <Text w={["90%", "90%", "90%"]} my={4}>
            This is an introductory course about using the C and Rust
            Programming Languages on "Bare Metal" embedded systems, such as
            Microcontrollers. We will start by introducing embedded systems and
            move on to learn the C++ and Rust programming languages. We'll learn
            about basic programming concepts using C and Rust, then we will
            explore key concepts in electronics, microcontrollers, and embedded
            programming. It is a fast-paced, thorough introduction to
            programming with C and Rust that will have you writing programs,
            solving problems, burning your code on microcontrollers, playing
            with GPIOs, and making things that work in no time.
          </Text>
          <Text>Course outline</Text>
          <OrderedList>
            <ListItem color="blue.600">
              Introduction to the Internet of Things and Embedded Systems (Weeks
              1 and 2)
              <br />
              <Link
                href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar"
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar
              </Link>{" "}
              What is the Fourth Industrial Revolution?
              <br />
              What is IoT?
              <br />
              Embedded Systems
              <br />
              Hardware and Software for IoT
              <br />
              Edge and Cloud Computing
              <br />
              The future of IoT is AI
              <br />
              Blockchain in the Internet of Things?
              <br />
              IoT + AI + Blockchain: The Fourth Industrial Revolution has begun
              <br />
              How will Matter change the IoT Infrastructure and address issues
              <br />
              Metaverse and IoT
              <br />
              <Text fontWeight={700}>
                Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in
                Week 3
              </Text>
              <br />
              Total Questions: 46, Total Time: 60 minutes
            </ListItem>
            <ListItem>
              Introduction to C Part 1 (Weeks 3B, 4, and 5)
              <br />
              C environment Setup for (Windows, Linux, and Mac OS systems)
              <br />
              Chapters 1-2 of “The C programming language”
              <UnorderedList>
                <ListItem>Variable names types</ListItem>
                <ListItem>Data types and sizes</ListItem>
                <ListItem>Constants</ListItem>
                <ListItem>Arithmetic operations</ListItem>
                <ListItem>Logical and relational operators</ListItem>
                <ListItem>Type conversions.</ListItem>
                <ListItem>Bitwise operators</ListItem>
                <ListItem>Conditional expressions.</ListItem>
              </UnorderedList>
              <br />
              Programming Assignments will also be given.
            </ListItem>
            <Link
              color="blue.600"
              href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
            >
              {" "}
              <Button> View more</Button>{" "}
            </Link>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
