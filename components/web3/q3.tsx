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
export default function Q3() {
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
          <Heading
            fontSize={["xl", "2xl", "2xl", "2xl"]}
            my={[".5rem", "1rem", "1rem", "2rem"]}
          >
            Quarter III (Core)
          </Heading>
          <Text
            fontWeight={600}
            my={["0rem", "2rem"]}
            fontSize={["lg", "2xl", "2xl", "2xl"]}
            w={["90%", "90%", "80%"]}
          >
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development <br />
            Duration: 13 Weeks
          </Text>
          <Heading textDecor="underline" fontSize="2xl">
            Earn While You Learn Projects
          </Heading>
          <Box my="3rem ">
            <Heading>A. Build Full-Stack Next.js 13 Jamstack Templates</Heading>
            <Text
              w={["100%", "100%", "80%"]}
              fontSize={["md", "lg", "xl"]}
              my="2rem"
            >
              You will be assigned to build a template which we will sell on
              Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will
              receive 25% share on the sale of the template which will be used
              to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the Panaverse DAO in the form of Panaverse
              tokens.
            </Text>
            <Text>The Template Standard</Text>
            <Link
              color="blue.600"
              href="https://github.com/panaverse/panaverse-template-standard"
            >
              https://github.com/panaverse/panaverse-template-standard
            </Link>
          </Box>

          <Heading>B. Build QraphQL APIs</Heading>
          <Text w={["90%", "90%", "80%"]} my="2rem">
            You will be assigned to build APIs for which you will sell
            subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO
            will receive 25% share on the sale of the template which will be
            used to manage the platform. An additional 15% will be spent on
            marketing the template. 60% of the revenues will be distributed to
            the developer through the Panaverse DAO in the form of Panaverse
            tokens.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
