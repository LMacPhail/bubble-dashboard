export type User = {
  id: string;
  creationDate: string;
  age: number;
  hourlyRate: number;
  sits: number;
  latestReviewDate: string;
  reviewerCount: number;
  dBSChecked: boolean | null;
  verifiedDBS: boolean;
  bubbleVerified: boolean;
  idVerified: boolean;
  referenceChecked: boolean;
  hasProfileVideo: boolean;
  oFSTEDRegistered: boolean | null;
  newBornExperience: boolean | null;
  hasUKDrivingLicense: boolean | null;
  firstAidTrained: boolean;
  specialNeedsExperience: boolean;
  otherLanguagesSpoken: string;
};

export type UNDER_18_GROUP = "<18";
export type UNDER_20_GROUP = "18-20";
export type UNDER_22_GROUP = "21-22";
export type OVER_23_GROUP = "23+";

export type MinWageUsers = Record<
  UNDER_18_GROUP | UNDER_20_GROUP | UNDER_22_GROUP | OVER_23_GROUP,
  boolean[]
>;

export type MinWage = {
  ageGroup: "<18" | "18-20" | "21-22" | "23+";
  below: number;
  above: number;
};
