import { MinWage, UserData } from "./types";

/** Returns the mean of numerical values in the data.
 */
export const getMean = (
  metric: keyof UserData,
  userData: UserData[]
): number | string => {
  if (typeof userData[0][metric] !== "number") {
    return "Numerical values only please";
  }

  const total = userData
    .map((x) => x[metric])
    .reduce((acc, v) => {
      return (acc as number) + (v as number);
    }, 0);

  return ((total as number) / userData.length).toFixed(2);
};

// Filters out stark outliers, such as users with age 0 or users with an impossibly high hourly rate
export const filterOutliers = (userData: UserData[]) =>
  userData.filter((x) => x.age !== 0 && x.hourlyRate < 200);
