import { Surveillance } from "../../models/questionnaire/surveillanceType.js";

const surveillanceTypes = [
  "No Surveillance",
  "6 Months",
  "9 Months",
  "12 Months",
];

export const seedSurveillanceType = async () => {
  for (const surveillanceType of surveillanceTypes) {
    await Surveillance.findOrCreate({
      where: { name: surveillanceType },
    });
  }
};
