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
export default function Q1() {
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
          <Heading>Quarter I (Core)</Heading>
          <Text>Course Description:</Text>
          <Text w={["90%", "90%", "80%"]}>
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.{" "}
          </Text>
          <Text>Course outline</Text>
          <OrderedList>
            <ListItem color="blue.600">
              <Link
                href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
              >
                HTML
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                CSS
              </Link>{" "}
              (Homework)
            </ListItem>
            <Link
              href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
              color="blue.600"
              fontSize={["xl"]}
            >
              <ListItem> Web 3.0 and Metaverse Theory</ListItem>
            </Link>
            <Link
              color="blue.600"
              fontSize={["xl"]}
              href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
            >
              <ListItem> Fundamentals of Typescript</ListItem>
            </Link>
            <Link
              color="blue.600"
              fontSize={["xl"]}
              href="https://github.com/panaverse/learn-typescript"
            >
              <ListItem> Object-Oriented Programming with TypeScript</ListItem>
            </Link>
            <Link
              color="blue.600"
              fontSize={["xl"]}
              href="https://profy.dev/article/react-typescript"
            >
              <ListItem> TypeScript for React</ListItem>
            </Link>
            <ListItem>Git quiz</ListItem>
            <ListItem>Total Questions: 63</ListItem>
            <ListItem>Duration: 120 minutes </ListItem>
            <ListItem>
              study material:{" "}
              <Link
                color="blue.600"
                fontSize={["xl"]}
                href="https://github.com/panaverse/learn-typescript"
              >
                https://profy.dev/article/react-typescript
              </Link>{" "}
            </ListItem>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
