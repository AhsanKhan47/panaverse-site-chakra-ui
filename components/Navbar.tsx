import React from "react";
import {
  Flex,
  Button,
  IconButton,
  Box,
  Text,
  Spacer,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { Slide } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box as="nav" m={[".5rem", "1rem", "1rem", "1rem"]} shadow="md">
      <Flex w="90%" h={16} m="auto" align="center" justify="space-between">
        <Link href="/">
          {" "}
          <Image
            height={90}
            width={90}
            alt="panaverselogo"
            src={`/red-p-logo-text_dao_croped.png`}
          />
        </Link>
        <Spacer />
        <Flex display={["none", "none", "flex", "flex"]} justifySelf="right">
          <Link _hover={{ color: "green.500" }} href={"/"}>
            <Button m={4}>Home</Button>
          </Link>
          <Link _hover={{ color: "green.500" }} href={"#aboutProgram"}>
            {" "}
            <Button m={4}>
              {" "}
              <Text>About Program</Text>
            </Button>
          </Link>
          {/* <Link _hover={{ color: "green.500" }} href={"#aboutProgram"}>
            {" "}
            <Button m={4}>
              {" "}
              <Text>Courses</Text>
            </Button>
          </Link> */}
          <Link _hover={{ color: "green.500" }} href="#Syllabus">
            {" "}
            <Button m={4}>
              {" "}
              <Text>Syllabus</Text>
            </Button>
          </Link>
        </Flex>
        <IconButton
          onClick={onToggle}
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          position="static"
          size="lg"
          mr={2}
          display={["flex", "flex", "none", "none"]}
          // onClick={() => setMenuDisplay("flex")}
          pos="absolute"
          top="2"
          right="4"
          zIndex={100}
        />
        {/* Mobile nav */}
        <Box zIndex={90}>
          <Slide in={isOpen}>
            <Flex
              pos="fixed"
              top="0"
              left="0"
              align={"center"}
              flexDir="column"
              justify="center"
              overflowY="auto"
              height="110vh"
              width="100vw"
              gap={12}
              mt="-6rem"
              zIndex={90}
              bgColor="red.400"
              fontSize={["lg"]}
              fontWeight="600"
            >
              <Link _hover={{ color: "white" }} href={"/"}>
                Home
              </Link>
              <Link
                _hover={{ color: "white" }}
                href={"#aboutProgram"}
                onClick={onToggle}
              >
                {" "}
                About Program
              </Link>
              <Link
                _hover={{ color: "white" }}
                href="#Syllabus"
                onClick={onToggle}
              >
                {" "}
                Syllabus
              </Link>
            </Flex>
          </Slide>
        </Box>
      </Flex>
    </Box>
  );
}
