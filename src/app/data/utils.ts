import { User } from "./types";

/** Returns the mean of numerical values in the data.
 */
export const getMean = (
  metric: keyof User,
  userData: User[]
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
