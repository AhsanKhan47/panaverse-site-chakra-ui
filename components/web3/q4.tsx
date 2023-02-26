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
      <Box m="auto" py="2rem">
        <Flex
          fontSize="xl"
          minH="80vh"
          flexDir="column"
          justify="space-around"
          align="start"
          w="90%"
          m="auto"
        >
          <Heading>Quarter IV</Heading>
          <Heading fontSize={"2xl"}>
            AI-351: Developing Planet-Scale Intelligent APIs and Python
            Programming
          </Heading>
          <Text>Course Description:</Text>
          <Text w={["90%", "90%", "80%"]}>
            Artificial intelligence is the simulation of human intelligence
            processes by machines, especially computer systems. The AI and Deep
            Learning Specialization is a foundational program that will aid in
            your comprehension of deep learning's potential, difficulties, and
            effects as well as equip you to take part in the creation of
            cutting-edge AI technology. <br />
            We will start this course by understanding the fundamentals and use
            cases for AI and move on to building next-gen intelligent apps using
            OpenAI’s powerful models and Next.js 13. <br />
            We'll conclude the course by learning about basic programming
            concepts using Python, such as lists, dictionaries, classes,
            functions, and loops, and practice writing clean and readable code
            with exercises for each topic. We'll also learn how to make your
            programs interactive and how to test your code safely before adding
            it to a project. It is a fast-paced, thorough introduction to
            programming with Python 3.10+ that will have you writing programs,
            solving problems, and making things that work in no time. In this
            quarter we will also learn Git, the distributed version control
            system. We will also review Git-based GitHub services.
          </Text>
          <Text>Course outline</Text>
          <OrderedList>
            <ListItem color="blue.600">
              Introduction to Machine Learning, Data Science, and AI
              <Link
                href="https://www.coursera.org/learn/ai-for-everyone 
                "
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                AI for Everyone
              </Link>{" "}
              AI for Everyone Quiz in Week 3 <br />
              Total Questions: 60, Total Time: 75 minutes
            </ListItem>

            <ListItem>
              {" "}
              Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models
              We will cover GPT-4, ChatGPT, etc. and Next.js 13 <br />
              <Link href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45">
                https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
              </Link>
            </ListItem>
            <ListItem>
              Python Crash Course for TypeScript Developers <br />
              Python Crash Course, 2nd Edition: A Hands-On, Project-Based
              Introduction to Programming 2nd Edition
              <Link
                color="blue.600"
                fontSize={["xl"]}
                href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
              >
                {" "}
                https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5
              </Link>
            </ListItem>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
