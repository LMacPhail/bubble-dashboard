import { UserData } from "./types";
import { userData } from "./userData";

type AgeGroup =
  | "<20"
  | "21-25"
  | "26-30"
  | "31-35"
  | "36-40"
  | "41-45"
  | "46-50"
  | "51+";

export type AgeGroupData = Record<AgeGroup, UserData[]>;
const groupedByAge: AgeGroupData = {
  "<20": [],
  "21-25": [],
  "26-30": [],
  "31-35": [],
  "36-40": [],
  "41-45": [],
  "46-50": [],
  "51+": [],
};

userData.forEach((datum) => {
  if (datum.age > 50) {
    groupedByAge["51+"].push(datum);
  } else if (datum.age > 45) {
    groupedByAge["46-50"].push(datum);
  } else if (datum.age > 40) {
    groupedByAge["41-45"].push(datum);
  } else if (datum.age > 35) {
    groupedByAge["36-40"].push(datum);
  } else if (datum.age > 30) {
    groupedByAge["31-35"].push(datum);
  } else if (datum.age > 25) {
    groupedByAge["26-30"].push(datum);
  } else if (datum.age > 20) {
    groupedByAge["21-25"].push(datum);
  } else {
    groupedByAge["<20"].push(datum);
  }
});

export default groupedByAge;
