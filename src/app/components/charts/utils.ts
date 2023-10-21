import { UserData, MinWageUsers, MinWage } from "@/app/data/types";
import { filterOutliers } from "@/app/data/utils";

const UNDER_18_GROUP = "<18";
const UNDER_21_GROUP = "18-20";
const UNDER_22_GROUP = "21-22";
const OVER_23_GROUP = "23+";

const UNDER_18_MIN_WAGE = 5.28;
const UNDER_21_MIN_WAGE = 7.49;
const UNDER_22_MIN_WAGE = 10.18;
const OVER_23_MIN_WAGE = 10.42;

export const filterMinWage = (userData: UserData[]): MinWage[] => {
  const under18Users = userData.filter((u) => u.age < 18);
  const under21Users = userData.filter((u) => u.age < 21);
  const under22Users = userData.filter((u) => u.age < 22);
  const over23Users = userData.filter((u) => u.age >= 23);

  return [
    minWageForGroup(UNDER_18_GROUP, under18Users, UNDER_18_MIN_WAGE),
    minWageForGroup(UNDER_21_GROUP, under21Users, UNDER_21_MIN_WAGE),
    minWageForGroup(UNDER_22_GROUP, under22Users, UNDER_22_MIN_WAGE),
    minWageForGroup(OVER_23_GROUP, over23Users, OVER_23_MIN_WAGE),
  ];
};

const minWageForGroup = (
  ageGroup: "<18" | "18-20" | "21-22" | "23+",
  userData: UserData[],
  minWage: number
): MinWage => ({
  ageGroup,
  below: userData.filter((u) => u.hourlyRate < minWage).length,
  above: userData.filter((u) => u.hourlyRate >= minWage).length,
});

export const minWageToDonut = (
  minWageGroup: MinWage
): { group: string; amount: number }[] => {
  return [
    { group: `${minWageGroup.ageGroup} Below`, amount: minWageGroup.below },
    { group: `${minWageGroup.ageGroup} Above`, amount: minWageGroup.above },
  ];
};
