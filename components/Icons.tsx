import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Flex, Link } from "@chakra-ui/react";
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
        <Link
          _hover={{ color: "gray" }}
          href="https://www.facebook.com/groups/panaverse"
          target="_blank"
        >
          {" "}
          <AiFillFacebook />{" "}
        </Link>

        <Link
          _hover={{ color: "gray" }}
          href="https://www.instagram.com/piaicofficial/"
          target="_blank"
        >
          {" "}
          <FaInstagramSquare />
        </Link>
        <Link
          _hover={{ color: "gray" }}
          href="https://github.com/panaverse"
          target="_blank"
        >
          {" "}
          <AiFillGithub />
        </Link>
        <Link
          _hover={{ color: "gray" }}
          href="https://www.youtube.com/@panaverse/featured"
          target="_blank"
        >
          {" "}
          <FaYoutube />
        </Link>
        <Link
          _hover={{ color: "gray" }}
          href="https://twitter.com/Panaverse_edu"
          target="_blank"
        >
          {" "}
          <AiFillTwitterSquare />
        </Link>
      </Flex>
    </>
  );
}
