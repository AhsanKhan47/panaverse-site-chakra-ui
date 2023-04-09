import React from "react";
import { card } from "./syllabusData";

import {
  Flex,
  Button,
  Box,
  Text,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import Wrapper from "./Wrapper";

export default function Courses() {
  return (
    <>
      <Wrapper>
        <Box w="90%" mx="auto">
          <Heading
            textAlign="center"
            mt={["2rem", "3rem ", "10rem"]}
            mb={["2rem", "4rem"]}
          >
            Courses
          </Heading>
          <Flex
            id="Courses"
            justify={["space-between", "center"]}
            mx="auto"
            flexWrap="wrap"
            mb="6rem"
            gap={["1rem", "3rem"]}
          >
            <Box
              boxSize={["350px", "450px", "380px", "400px"]}
              bg={"gray.200"}
              p={8}
              rounded="md"
            >
              <Image
                src={`/metaverse.jpg`}
                rounded="md"
                alt="metaverse course"
              ></Image>
              <Text mt={4}> Web 3.0 and Metaverse</Text>{" "}
              <Link href={`/wmd`}>
                <Button
                  _hover={{ bg: "green.500", color: "white" }}
                  size={["sm", "lg"]}
                  marginTop={["2rem", "2rem"]}
                  border="2px"
                  borderColor="green.500"
                >
                  View details
                </Button>
              </Link>{" "}
            </Box>{" "}
            <Box
              boxSize={["350px", "450px", "380px", "400px"]}
              bg={"gray.200"}
              p={4}
              rounded="md"
            >
              <Image
                src={`/ai.jpg`}
                rounded="md"
                alt="metaverse course"
              ></Image>
              <Text mt={4}> Artificial Intelligence and Deep Learning</Text>{" "}
              <Link href={`/ai`}>
                <Button
                  _hover={{ bg: "green.500", color: "white" }}
                  size={["sm", "lg"]}
                  marginTop={["2rem", "2rem"]}
                  border="2px"
                  borderColor="green.500"
                >
                  View details
                </Button>
              </Link>{" "}
            </Box>{" "}
            <Box
              boxSize={["350px", "450px", "380px", "400px"]}
              bg={"gray.200"}
              p={4}
              rounded="md"
            >
              <Image
                src={`/cloud.avif`}
                rounded="md"
                alt="Cloud-Native Computing course"
              ></Image>
              <Text mt={4}>Cloud-Native Computing</Text>{" "}
              <Link href={`/cnac`}>
                <Button
                  _hover={{ bg: "green.500", color: "white" }}
                  size={["sm", "lg"]}
                  marginTop={["2rem", "2rem"]}
                  border="2px"
                  borderColor="green.500"
                >
                  View details
                </Button>
              </Link>{" "}
            </Box>{" "}
            <Box
              boxSize={["350px", "450px", "380px", "400px"]}
              bg={"gray.200"}
              p={4}
              rounded="md"
            >
              <Image
                src={`/ambient.jpg`}
                rounded="md"
                alt="            Ambient Computing and Iot
              course"
              ></Image>
              <Text mt={4}> Ambient Computing and IoT</Text>{" "}
              <Link href={`/aciot`}>
                <Button
                  _hover={{ bg: "green.500", color: "white" }}
                  size={["sm", "lg"]}
                  marginTop={["2rem", "2rem"]}
                  border="2px"
                  borderColor="green.500"
                >
                  View details
                </Button>
              </Link>{" "}
            </Box>{" "}
            <Box
              boxSize={["350px", "450px", "380px", "400px"]}
              bg={"gray.200"}
              p={4}
              rounded="md"
            >
              <Image
                src={`/genomics.avif`}
                rounded="md"
                alt="Genomics and Bioinformatics course"
              ></Image>
              <Text mt={4}>Genomics and Bioinformatics</Text>{" "}
              <Link href={`/gb`}>
                <Button
                  _hover={{ bg: "green.500", color: "white" }}
                  size={["sm", "lg"]}
                  marginTop={["2rem", "2rem"]}
                  border="2px"
                  borderColor="green.500"
                >
                  View details
                </Button>
              </Link>{" "}
            </Box>{" "}
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
}
