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
} from "@tremor/react";
// import groupedByAge from "./data/groupedByAge";
import { userData } from "./data/userData";

export default function DashboardExample() {
  return (
    <main className="p-12">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
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
                  maxYValue={100}
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
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
