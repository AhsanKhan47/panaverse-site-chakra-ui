import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/Ai";
import { FaInstagramSquare, FaYoutube } from "react-icons/Fa";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
  Link,
  Text,
  Spacer,
  Heading,
  Image,
} from "@chakra-ui/react";
export default function Social() {
  return (
    <>
      <Flex
        w={["70%", "50%", "50%", "40%"]}
        justify="space-between"
        mt={[6, 4]}
        fontSize={["30px", "40px"]}
        gap={["1rem", "0"]}
      >
        <Link href="https://twitter.com/Panaverse_edu">
          {" "}
          <AiFillFacebook />{" "}
        </Link>

        <Link href="https://twitter.com/Panaverse_edu">
          {" "}
          <FaInstagramSquare />
        </Link>
        <Link href="https://twitter.com/Panaverse_edu">
          {" "}
          <AiFillGithub />
        </Link>
        <Link href="https://twitter.com/Panaverse_edu">
          {" "}
          <FaYoutube />
        </Link>
        <Link href="https://twitter.com/Panaverse_edu">
          {" "}
          <AiFillTwitterSquare />
        </Link>
      </Flex>
    </>
  );
}
