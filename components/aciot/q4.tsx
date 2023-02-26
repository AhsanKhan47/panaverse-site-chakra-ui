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
          <Heading>Quarter V</Heading>
          <Heading fontSize={"2xl"}>
            AC-351: Ambient Computing with Voice Assistants and Matter Devices
          </Heading>
          <Text>Course Description:</Text>
          <Text w={["90%", "90%", "80%"]}>
            Ambient computing, also commonly referred to as ubiquitous
            computing, is the concept of blending computing power into our
            everyday lives in a way that is embedded into our surroundings -
            invisible but useful. In a multi-device world, people don't want to
            spend their life fussing with technology. An ambient approach gets
            the tech out of your way so you can live your life while getting the
            help you need. It doesn't matter what device you're using, what
            context you're in, whether you're talking, typing, or tapping. The
            technology in your life works together seamlessly. Ambient computing
            uses all aspects of modern-day technology, including voice
            assistants, artificial intelligence, sensors, connectivity, cloud
            computing and more.
            <br />
            If you were thinking that the IoT and ambient computing sound a lot
            alike, you aren't wrong; the two concepts are intertwined. IoT
            refers to the vast array of devices that connect to the internet to
            optimize their functionality, like smart sensors and smart speakers:
            ambient computing builds on that. Ambient computing focuses on the
            interaction between these devices once they are connected.
            <br />
            Matter, the next-generation smart home standard, solves many smart
            home pain points while bringing all our IoT devices together. Some
            of the biggest tech companies are working together to make Matter a
            unified protocol for future smart homes. These companies include
            Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
            Samsung SmartThings, Google Nest, and Samsung SmartThings will
            support the Matter standard by default for all new devices.
            <br />
            In this course we will learn to build smart homes with Amazon Alexa
            and Matter protocol.
            <br />
          </Text>
          <Text>Course outline</Text>
          <OrderedList>
            <ListItem color="blue.600">
              Alexa Skill Developement
              <Link
                href="https://developer.amazon.com/en-US/alexa 
                "
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                https://developer.amazon.com/en-US/alexa
              </Link>{" "}
            </ListItem>
            <ListItem>
              Alexa with Matter Protocol
              <br />
              <Link
                href="https://developer.amazon.com/en-US/alexa/matter"
                color="blue.600"
                fontSize={["xl"]}
              >
                https://developer.amazon.com/en-US/alexa/matter
              </Link>{" "}
              <Link
                href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
                color="blue.600"
                fontSize={["xl"]}
              >
                https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html
              </Link>
            </ListItem>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
