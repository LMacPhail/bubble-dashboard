"use client";

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  ScatterChart,
  Flex,
  Metric,
} from "@tremor/react";
import { userData } from "./data/userData";
import { getMean } from "./data/utils";

export default function DashboardExample() {
  return (
    <main className="p-12">
      <Title>Bubble Data Overview</Title>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                <Flex alignItems="start" className="h-28">
                  <div>
                    <Text>Mean Hourly Wage</Text>
                    <Metric>£{getMean("hourlyRate", userData)}</Metric>
                  </div>
                </Flex>
                {/* Placeholder to set height */}
                <div />
              </Card>
              <Card>
                <Flex alignItems="start" className="h-28">
                  <div>
                    <Text>Mean Age</Text>
                    <Metric>{getMean("age", userData)} years old</Metric>
                  </div>
                </Flex>
                {/* Placeholder to set height */}
                <div />
              </Card>
              <Card>
                <Flex alignItems="start" className="h-28">
                  <div>
                    <Text>Mean No. Sits</Text>
                    <Metric>{getMean("sits", userData)}</Metric>
                  </div>
                </Flex>
                {/* Placeholder to set height */}
                <div />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <Title>Age vs. Wage</Title>
                <ScatterChart
                  className="h-80 mt-6 -ml-2"
                  yAxisWidth={80}
                  data={userData}
                  category="dbsChecked"
                  x="age"
                  y="hourlyRate"
                  showOpacity={true}
                  minYValue={0}
                  maxYValue={30}
                  valueFormatter={{
                    y: (amount) => `£${amount}`,
                    x: (age) => `${age} yrs`,
                  }}
                />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96">
                  All the interesting stuff is on the other tab right now.
                </div>
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
