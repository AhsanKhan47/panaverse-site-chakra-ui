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

export default function Courses() {
  return (
    <>
      <Box>
        <Heading
          textAlign="center"
          mt={["2rem", "3rem ", "10rem"]}
          mb={["2rem", "4rem"]}
        >
          Courses
        </Heading>
        <Flex
          w="90%"
          justify="space-around"
          flexWrap="wrap"
          m="auto"
          mb="6rem"
          gap={["1rem", "4rem"]}
        >
          <Box boxSize={["250px", "200px", "300px", "350px"]}>
            <Image
              src={`/metaverse.jpg`}
              rounded="md"
              alt="metaverse course"
            ></Image>
            <Text mt={4}> Web 3.0 and Metaverse</Text>{" "}
            <Link href={`/wmd`}>
              <Button
                mt={[".5rem", "1rem", "2rem"]}
                _hover={{ bg: "green.500", color: "white" }}
                size={["sm", "lg"]}
              >
                View details
              </Button>
            </Link>{" "}
          </Box>{" "}
          <Box boxSize={["250px", "200px", "300px", "350px"]}>
            <Image src={`/ai.jpg`} rounded="md" alt="metaverse course"></Image>
            <Text mt={4}> Artificial Intelligence and Deep Learning</Text>{" "}
            <Link href={`/ai`}>
              <Button
                mt={[".5rem", "1rem", "2rem"]}
                _hover={{ bg: "green.500", color: "white" }}
                size={["sm", "lg"]}
              >
                View details
              </Button>
            </Link>{" "}
          </Box>{" "}
          <Box boxSize={["250px", "200px", "300px", "350px"]}>
            <Image
              src={`/cloud.avif`}
              rounded="md"
              alt="Cloud-Native Computing course"
            ></Image>
            <Text mt={4}>Cloud-Native Computing</Text>{" "}
            <Link href={`/cnac`}>
              <Button
                mt={[".5rem", "1rem", "2rem"]}
                _hover={{ bg: "green.500", color: "white" }}
                size={["sm", "lg"]}
              >
                View details
              </Button>
            </Link>{" "}
          </Box>{" "}
          <Box boxSize={["250px", "200px", "300px", "350px"]}>
            <Image
              src={`/ambient.jpg`}
              rounded="md"
              alt="            Ambient Computing and Iot
              course"
            ></Image>
            <Text mt={4}> Ambient Computing and IoT</Text>{" "}
            <Link href={`/aciot`}>
              <Button
                mt={[".5rem", "1rem", "2rem"]}
                _hover={{ bg: "green.500", color: "white" }}
                size={["sm", "lg"]}
              >
                View details
              </Button>
            </Link>{" "}
          </Box>{" "}
          <Box boxSize={["250px", "200px", "300px", "350px"]}>
            <Image
              src={`/genomics.avif`}
              rounded="md"
              alt="Genomics and Bioinformatics course"
            ></Image>
            <Text mt={4}>Genomics and Bioinformatics</Text>{" "}
            <Link href={`/gb`}>
              <Button
                mt={[".5rem", "1rem", "2rem"]}
                _hover={{ bg: "green.500", color: "white" }}
                size={["sm", "lg"]}
              >
                View details
              </Button>
            </Link>{" "}
          </Box>{" "}
        </Flex>
      </Box>
    </>
  );
}
