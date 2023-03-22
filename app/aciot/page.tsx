"use client";
import React from "react";
import Q2 from "@/components/web3/q2";
import Q3 from "@/components/web3/q3";
import Q1 from "@/components/web3/q1";
import Q4 from "@/components/aciot/q4";
import Q5 from "@/components/aciot/q5";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
export default function Ai() {
  return (
    <>
      <Tabs w="90%" m="auto">
        <TabList>
          <Tab fontSize={["12px", "19px"]} p={["9px", "1rem"]}>
            Quarter 1
          </Tab>
          <Tab fontSize={["12px", "19px"]} p={["9px", "1rem"]}>
            Quarter 2
          </Tab>
          <Tab fontSize={["12px", "19px"]} p={["9px", "1rem"]}>
            Quarter 3
          </Tab>
          <Tab fontSize={["12px", "19px"]} p={["9px", "1rem"]}>
            Quarter 4
          </Tab>
          <Tab fontSize={["12px", "19px"]} p={["9px", "1rem"]}>
            Quarter 5
          </Tab>
        </TabList>

        <TabPanels w="40%">
          <TabPanel>
            <Q1 />
          </TabPanel>
          <TabPanel>
            <Q2 />
          </TabPanel>
          <TabPanel>
            <Q3 />
          </TabPanel>
          <TabPanel>
            <Q4 />
          </TabPanel>
          <TabPanel>
            <Q5 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
