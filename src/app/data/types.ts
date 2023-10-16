export type User = {
  id: string;
  creationDate: string;
  age: number;
  hourlyRate: number;
  sits: number;
  latestReviewDate: string;
  reviewerCount: number;
  dBSChecked: boolean;
  verifiedDBS: boolean;
  bubbleVerified: boolean;
  idVerified: boolean;
  referenceChecked: boolean;
  hasProfileVideo: boolean;
  oFSTEDRegistered: boolean | null;
  newBornExperience: boolean | null;
  firstAidTrained: boolean;
  specialNeedsExperience: boolean;
  otherLanguagesSpoken: string;
};
