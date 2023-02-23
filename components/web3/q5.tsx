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
            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
            Experiences
          </Heading>
          <Text>Duration: 13 Weeks</Text>
          <Text>Course Description:</Text>
          <Text w={["90%", "90%", "80%"]}>
            The Web is the Metaverse. The metaverse requires an infrastructure
            that connects all of the metaverses so that we can travel between
            them. This is only achievable with open web-based metaverses. The
            internet and its browsers are magical. Federated but linked
            experiences connect pages, people, technology, businesses,
            standards, and nations. It's unlike anything else. The metaverse
            should replicate the best qualities of the web - it should just be
            the web. We just have to extend online responsive design from mobile
            to desktop to 3D, Augmented Reality, and Virtual Reality. This
            course will teach you how to build the Open Social Spatial Web with
            WebXR and WebGPU technologies.
          </Text>
          <Text>Course outline</Text>
          <OrderedList>
            <ListItem color="blue.600">
              <Link
                href="https://github.com/panaverse/metaverse-web
                "
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                Open Metaverse Web Development
              </Link>{" "}
            </ListItem>
            <ListItem>
              Blender 3D asset Creation for the Metaverse (Remote Zoom Class){" "}
              <br />
              Blender development is being funded by heavyweights in the
              real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta,
              NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is
              expected to become the standard asset creation tool for metaverse.{" "}
              <br />
              Blender 3.3+ Download <br />
              Blender 3.0 Beginner Tutorial{" "}
              <Link href="https://www.blender.org/download/">
                https://www.blender.org/download/
              </Link>{" "}
              <br />
              <Link href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
              </Link>{" "}
              <br />
              Blender 3.0 Hotkey{" "}
              <Link href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit">
                https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit
              </Link>
              <br />
              Blender Projects Textbook: Blender by Example 2nd Edition{" "}
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
              </Link>{" "}
              <br />
              Blender Textbook: The Complete Guide to Blender Graphics: Computer
              Modeling & Animation 7th Edition by John M. Blain{" "}
              <Link href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5">
                https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5
              </Link>{" "}
              <br />
              Best Hardware Performance for Blender Rendering{" "}
              <Link href="https://www.youtube.com/watch?v=H7T0SzdFHwg">
                https://www.youtube.com/watch?v=H7T0SzdFHwg
              </Link>
              <br />
            </ListItem>
            <Heading>Assignments</Heading>
            <ListItem>
              Build a Viking Scene using Blender 3 as shown in chapter 2 of the
              Book [Blender by Example 2nd Edition] <br />
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561s
              </Link>
            </ListItem>{" "}
            <ListItem>
              Modeling a Time Machine using Blender 3 as shown in chapters 3 and
              4 of the Book Blender by Example 2nd Edition <br />
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561{" "}
              </Link>
            </ListItem>{" "}
            <ListItem>
              Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6,
              and 7 of the Book Blender by Example 2nd Edition <br />
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
              </Link>
            </ListItem>{" "}
            <ListItem>
              Illustrating an Alien Hero with Grease Pencil as shown in chapter
              8 of the Book Blender by Example 2nd Edition <br />
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
              </Link>
            </ListItem>{" "}
            <ListItem>
              Build a 3D Sword in the Stone using Blender 3 as shown in these
              video tutorials <br />
              <Link href="https://www.youtube.com/watch?v=bpvh-9H8S1g">
                https://www.youtube.com/watch?v=bpvh-9H8S1g
              </Link>
            </ListItem>{" "}
            <ListItem>
              Build a Viking Scene using Blender 3 as shown in chapter 2 of the
              Book [Blender by Example 2nd Edition] <br />
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561s
              </Link>
            </ListItem>
            <Link
              color="blue.600"
              href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
            >
              {" "}
              <Button> View more</Button>{" "}
            </Link>
          </OrderedList>
        </Flex>
      </Box>
    </>
  );
}
