import React from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
  Text,
  Spacer,
  Fade,
  Link,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box as="nav" m={[".5rem", "1rem", "1rem", "1rem"]} shadow="md">
      <Flex w="90%" h={16} m="auto" align="center" justify="space-between">
        <Image
          height={90}
          width={90}
          alt="panaverselogo"
          src={`/red-p-logo-text_dao_croped.png`}
        />
        <Spacer />
        <Flex display={["none", "none", "flex", "flex"]} justifySelf="right">
          <Link href={"/Home"}>
            <Button m={4}>
              <Text>Home</Text>{" "}
            </Button>
          </Link>
          <Link href={"/About"}>
            {" "}
            <Button m={4}>
              {" "}
              <Text>About</Text>
            </Button>
          </Link>
          <Link href={"/Services"}>
            {" "}
            <Button m={4}>
              {" "}
              <Text>Service</Text>
            </Button>
          </Link>
        </Flex>
        <IconButton
          onClick={onToggle}
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          size="lg"
          mr={2}
          display={["flex", "flex", "none", "none"]}
          // onClick={() => setMenuDisplay("flex")}
          pos="absolute"
          top="5"
          right="4"
          zIndex={50}
        />
        {/* Mobile nav */}
        <Collapse in={isOpen} animateOpacity>
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
            zIndex={30}
            bgColor="red.400"
            fontSize={["lg"]}
            fontWeight="600"
          >
            <Link href={"/Home"}>Home</Link>
            <Link href={"/About"}> About</Link>
            <Link href={"/Services"}> Services</Link>
          </Flex>
        </Collapse>
      </Flex>
    </Box>
  );
}
