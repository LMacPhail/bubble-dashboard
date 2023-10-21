import { MinWage, UserData } from "@/app/data/types";
import {
  Bold,
  Card,
  Col,
  DonutChart,
  Grid,
  Subtitle,
  Title,
} from "@tremor/react";
import React from "react";
import { filterMinWage, minWageToDonut } from "./utils";
import { filterOutliers } from "@/app/data/utils";

const MinimumWageChart: React.FC<{ userData: UserData[] }> = ({ userData }) => {
  const minWageFiltered = filterMinWage(filterOutliers(userData));
  console.log(minWageFiltered);
  return (
    <Card>
      <Title>Proportion of Minimum Wage by Age Group</Title>
      <Grid numItemsLg={4}>
        {minWageFiltered.map((mw: MinWage) => (
          <Col>
            <Title>{mw.ageGroup}</Title>
            <MinWageDonutCard minWageGroup={mw} />
          </Col>
        ))}
      </Grid>
    </Card>
  );
};

const MinWageDonutCard: React.FC<{ minWageGroup: MinWage }> = ({
  minWageGroup,
}) => {
  const { above, below } = minWageGroup;
  const total = above + below;
  return (
    <>
      <DonutChart
        className="mt-6"
        data={minWageToDonut(minWageGroup)}
        category="amount"
        index="group"
      />
      <Subtitle>
        Percentage Below Min Wage:{" "}
        <Bold>{((minWageGroup.below / total) * 100).toFixed(2)} %</Bold>
      </Subtitle>
    </>
  );
};

export default MinimumWageChart;
