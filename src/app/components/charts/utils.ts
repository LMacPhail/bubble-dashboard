import { UserData, MinWageUsers } from "@/app/data/types";
import { filterOutliers } from "@/app/data/utils";

const UNDER_18_GROUP = "<18";
const UNDER_21_GROUP = "18-20";
const UNDER_22_GROUP = "21-22";
const OVER_23_GROUP = "23+";

const UNDER_18_MIN_WAGE = 5.28;
const UNDER_21_MIN_WAGE = 7.49;
const UNDER_22_MIN_WAGE = 10.18;
const OVER_23_MIN_WAGE = 10.42;

export const filterMinWage = (userData: UserData[]): MinWageUsers => {
  const legitData = filterOutliers(userData);
  const minWage: MinWageUsers = {
    "<18": [],
    "18-20": [],
    "21-22": [],
    "23+": [],
  };
  legitData.forEach((d) => {
    if (d.age < 18) {
      minWage[UNDER_18_GROUP].push(d.hourlyRate < UNDER_18_MIN_WAGE);
    } else if (d.age < 21) {
      minWage[UNDER_21_GROUP].push(d.hourlyRate < UNDER_21_MIN_WAGE);
    } else if (d.age < 22) {
      minWage[UNDER_22_GROUP].push(d.hourlyRate < UNDER_22_MIN_WAGE);
    } else {
      minWage[OVER_23_GROUP].push(d.hourlyRate < OVER_23_MIN_WAGE);
    }
  });
  return minWage;
};
