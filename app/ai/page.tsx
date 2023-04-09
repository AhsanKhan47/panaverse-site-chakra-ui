"use client";
import React from "react";
import Q2 from "@/components/web3/q2";
import Q3 from "@/components/web3/q3";
import Q1 from "@/components/web3/q1";
import Q4 from "@/app/ai/q4";
import Q5 from "@/app/ai/q5";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Wrapper from "@/components/Wrapper";
export default function Ai() {
  return (
    <>
      <Wrapper>
        {" "}
        <Tabs w="90%" m="auto">
          <TabList>
            <Tab>Quarter 1</Tab>
            <Tab>Quarter 2</Tab>
            <Tab>Quarter 3</Tab>
            <Tab>Quarter 4</Tab>
            <Tab>Quarter 5</Tab>
          </TabList>

          <TabPanels>
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
      </Wrapper>
    </>
  );
}
