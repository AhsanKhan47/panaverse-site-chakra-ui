"use client";

import React from "react";
import {
  Flex,
  Box,
  Link,
  Text,
  Heading,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
export default function Q2() {
  return (
    <>
      <Box m="auto" py="2rem" w="100%">
        <Flex
          fontSize={["sm", "lg", "xl"]}
          flexDir="column"
          justify="space-between"
          align="start"
          w="90%"
          m="auto"
        >
          <Heading
            fontSize={["lg", "2xl", "2xl", "2xl"]}
            my={[".5rem", "1rem", "1rem", "2rem"]}
          >
            Quarter II (Core)
          </Heading>
          <Text
            fontWeight={600}
            my="2rem"
            fontSize={["lg", "2xl", "2xl", "2xl"]}
            w={["90%", "90%", "80%"]}
          >
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
            APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
          </Text>
          <Text>Course Description:</Text>
          <Text w={["90%", "90%", "80%"]} my="2rem">
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
          </Text>
          <Text>Course outline :</Text>
          <OrderedList my="1rem" fontSize={["sm", "lg", "xl"]}>
            <ListItem color="blue.600">
              <Link
                href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
              >
                Next.js 13 Web Development
              </Link>{" "}
              (Homework)
            </ListItem>
            <Link href="https://chakra-ui.com/getting-started" color="blue.600">
              <ListItem>
                {" "}
                Next.js 13 using Chakra UI (Remote Zoom Class)
              </ListItem>
            </Link>
            <Link
              color="blue.600"
              href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
            >
              <ListItem>
                UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
                Class)
              </ListItem>
            </Link>
            <Link
              color="blue.600"
              href="https://nextjs.org/docs/api-routes/introduction"
            >
              <ListItem> API Routes with Next.js (Remote Zoom Class)</ListItem>
            </Link>
            <Link
              color="blue.600"
              href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
            >
              <ListItem>
                {" "}
                APIs with Next.js and tRPC (Remote Zoom Class)
              </ListItem>
            </Link>

            <Link
              color="blue.600"
              href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
            >
              <ListItem> SQL and Prisma</ListItem>
            </Link>
            <Link
              color="blue.600"
              href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
            >
              <ListItem>
                {" "}
                Next.js 13 using TailwindCSS (Remote Zoom Class)
              </ListItem>
            </Link>
            <Link
              color="blue.600"
              href="https://www.youtube.com/watch?v=BujE_tik5r8"
            >
              <ListItem> AWS Application Composer (Remote Zoom Class)</ListItem>
            </Link>
            <Heading my="2rem" fontSize={"2xl"}>
              Web 2.0 projects
            </Heading>
            <ListItem color="blue.600">Next.js Projects</ListItem>
            <Link href="https://github.com/panaverse/nextjs-projects">
              {" "}
              <ListItem color="blue.600">
                https://github.com/panaverse/nextjs-projects
              </ListItem>
            </Link>

            <Link href="https://github.com/panaverse/styling-nextjs-projects">
              {" "}
              <ListItem color="blue.600">
                Styling Next.js Projects using TailwindCSS and Chakra UI
              </ListItem>
            </Link>
            <Link href="https://github.com/ogzhanolguncu/min-todo">
              {" "}
              <ListItem color="blue.600">Todo Full-Stack App</ListItem>
            </Link>
            <Link href="https://www.youtube.com/watch?v=nzJsYJPCc80">
              {" "}
              <ListItem color="blue.600">Build a Twitter Clone</ListItem>
            </Link>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
