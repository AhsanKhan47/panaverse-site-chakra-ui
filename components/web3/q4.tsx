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
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </Heading>
          <Text>Course Description:</Text>
          <Text w={["90%", "90%", "80%"]}>
            In this course you will learn how to develop Web 3.0 DApps, create a
            project, deploy it in production, write smart contracts, unit test
            them, and create user interfaces for them. We will also learn to
            develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that
            in order to develop Web 3 applications you also need to build on top
            of Web 2.0 technologies which we have already covered in the
            previous quarters.
          </Text>
          <Text>Course outline</Text>
          <OrderedList>
            <ListItem color="blue.600">
              <Link
                href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0 
                "
                textDecor="underline"
                fontWeight={700}
                color="blue.600"
                fontSize={["xl"]}
              >
                Blockchain and Metaverse Theory
              </Link>{" "}
            </ListItem>
            <Link
              href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
              color="blue.600"
              fontSize={["xl"]}
            >
              <ListItem> Smart Contract Development in Solidity</ListItem>
            </Link>
            <Link
              color="blue.600"
              fontSize={["xl"]}
              href="https://github.com/panaverse/dapps-nextjs"
            >
              <ListItem>
                {" "}
                Dapp Development using Ethers.js and Next.js 13
              </ListItem>
            </Link>

            <ListItem> Tokennomics</ListItem>

            <ListItem>
              {" "}
              Blockchain Project: Create a Token and Launch ICO/IEO/IDO
            </ListItem>

            <Text>
              As you probably know, the ICO ("Initial Coin Offering") industry
              has been booming, and it's completely reinventing the way new
              startups kickstart themselves. In fact, have a look at Wikipedia's
              list of highest crowdfunding projects{" "}
              <Link
                color="blue.600"
                href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
              >
                https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects
              </Link>
              and you'll notice that blockchain projects absolutely dominate the
              list. <br />
              Understand the difference between IDO vs. IEO vs. ICO <br />
              <Link
                color="blue.600"
                href="https://phemex.com/blogs/what-is-a-dex-ido"
              >
                https://phemex.com/blogs/what-is-a-dex-ido
              </Link>{" "}
              <br />
              Also check these links for latest listings: <br />
              ICO list at ICO Drops{" "}
              <Link color="blue.600" href="https://icodrops.com">
                https://icodrops.com
              </Link>
              ICO List of Best New Initial Coin Offerings{" "}
              <Link color="blue.600" href="https://topicolist.com/">
                https://topicolist.com/
              </Link>{" "}
              <br />
              Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOs
              <Link color="blue.600" href="https://cryptototem.com/ico-list/">
                https://cryptototem.com/ico-list/
              </Link>{" "}
              <br />
              <Link color="blue.600" href="https://www.icolistingonline.com">
                https://www.icolistingonline.com
              </Link>
              <br />
              Binance IEO List{" "}
              <Link
                color="blue.600"
                href="https://coincodex.com/ieo-list/binance/"
              >
                https://coincodex.com/ieo-list/binance/
              </Link>
            </Text>
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
