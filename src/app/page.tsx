"use client";

import {
  Card,
  Grid,
  Title,
  Text,
  ScatterChart,
  Flex,
  Metric,
  Col,
  BarChart,
} from "@tremor/react";
import { userData } from "./data/userData";
import { getMean } from "./data/utils";
import { filterMinWage } from "./components/charts/utils";
import MinimumWageChart from "./components/charts/MinimumWageChart";

export default function DashboardExample() {
  return (
    <main className="p-12">
      <Title>Bubble Data Overview</Title>
      <Grid numItemsLg={6} className="gap-6 mt-6">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-full">
            <Title>Age vs. Wage</Title>
            <ScatterChart
              className="h-96 -ml-2"
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
        </Col>

        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card>
              <Flex alignItems="start" className="h-24">
                <div>
                  <Text>Mean Hourly Wage</Text>
                  <Metric>£{getMean("hourlyRate", userData)}</Metric>
                </div>
              </Flex>
            </Card>
            <Card>
              <Flex alignItems="start" className="h-24">
                <div>
                  <Text>Mean Age</Text>
                  <Metric>{getMean("age", userData)} years old</Metric>
                </div>
              </Flex>
            </Card>
            <Card>
              <Flex alignItems="start" className="h-24">
                <div>
                  <Text>Mean No. Sits</Text>
                  <Metric>{getMean("sits", userData)}</Metric>
                </div>
              </Flex>
            </Card>
          </div>
        </Col>
        <Col numColSpan={6}>
          <MinimumWageChart userData={userData} />
        </Col>
      </Grid>
    </main>
  );
}
