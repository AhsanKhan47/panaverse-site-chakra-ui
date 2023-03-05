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
export default function Q4() {
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
          <Heading fontSize={"2xl"}>
            CN-361: Developing Multi-Cloud Apps using CDK for Terraform
          </Heading>
          <Text>Course Description:</Text>
          <Text w={["100%", "100%", "80%"]} fontSize={["md", "lg", "xl"]}>
            Cloud-native architecture and technologies are an approach to
            designing, constructing, and operating workloads that are built in
            the cloud and take full advantage of the cloud computing model.
            Cloud-native technologies empower organizations to build and run
            scalable applications in modern, dynamic environments such as
            public, private, and hybrid clouds. Containers, service meshes,
            microservices, immutable infrastructure, and declarative APIs
            exemplify this approach. <br />
            These techniques enable loosely coupled systems that are resilient,
            manageable, and observable. Combined with robust automation, they
            allow engineers to make high-impact changes frequently and
            predictably with minimal toil. <br />
            Kubernetes is an open-source system for automating the deployment,
            scaling, and management of containerized applications. In this
            course, you will learn how to develop cloud applications using
            cloud-native technologies like Containers, Kubernetes, and CDK for
            Kubernetes. <br />
          </Text>
          <Text>Course outline</Text>
          <OrderedList fontSize={["md", "lg", "xl"]}>
            <ListItem color="blue.600">
              Kubernetes: Up and Running: Dive into the Future of Infrastructure
              3rd Edition
              <Link
                href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3 
                "
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3{" "}
              </Link>{" "}
            </ListItem>
            <ListItem>
              Cloud Development Kit for Kubernetes <br />
              <Link href="https://cdk8s.io/" color="blue.600" fontSize={["xl"]}>
                https://cdk8s.io/
              </Link>
            </ListItem>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
