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
export default function Q5() {
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
          <Heading>Quarter V</Heading>
          <Heading fontSize={"2xl"} my={8} w="90%">
            CN-361: Developing Multi-Cloud Apps using CDK for Terraform
          </Heading>
          <Text fontWeight={600}>Duration: 13 Weeks</Text>
          <Text fontWeight={600}>Course Description:</Text>
          <Text
            w={["100%", "100%", "80%"]}
            fontSize={["md", "lg", "xl"]}
            my={4}
          >
            Terraform lets you use the same workflow to manage multiple
            providers and handle cross-cloud dependencies. This simplifies
            management and orchestration for large-scale, multi-cloud
            infrastructures. <br />
            Cloud Development Kit for Terraform (CDKTF) allows you to use
            familiar programming languages to define and provision
            infrastructure. This gives you access to the entire Terraform
            ecosystem without learning HashiCorp Configuration Language (HCL)
            and lets you leverage the power of your existing toolchain for
            testing, dependency management, etc.
          </Text>
          <Text>Course outline</Text>
          <OrderedList fontSize={["md", "lg", "xl"]}>
            <ListItem color="blue.600">
              CDK for Terraform <br />
              <Link
                href="https://developer.hashicorp.com/terraform/cdktf"
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                https://developer.hashicorp.com/terraform/cdktf
              </Link>{" "}
            </ListItem>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
