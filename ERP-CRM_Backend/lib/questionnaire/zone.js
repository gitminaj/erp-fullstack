import { Zone } from "../../models/questionnaire/zone.js";

const zones = [
  "North Zone",
  "South Zone",
  "East Zone",
  "West Zone",
  "Overseas",
];

export const seedZone = async () => {
  for (const zone of zones) {
    await Zone.findOrCreate({
      where: { name: zone },
    });
  }
};
