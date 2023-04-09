"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { FC } from "react";
const Wrapper: FC<{
  children: React.ReactNode;
  spaceSm?: string;
  spaceMd?: string;
}> = ({ children, spaceSm, spaceMd }) => {
  return (
    <Box maxW="8xl" mx="auto" my={[`${spaceSm}rem`, `${spaceMd}rem`]}>
      {children}
    </Box>
  );
};
export default Wrapper;
