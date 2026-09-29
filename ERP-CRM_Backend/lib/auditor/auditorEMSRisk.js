import EmsRisk from "../../models/auditor/auditorEmsRisk.js";

const emsRisks = [
  "Medium",
  "High",
  "Low",
];

export const seedAuditorEmsRisk = async () => {
  for (const emsRisk of emsRisks) {
    await EmsRisk.findOrCreate({
      where: { name: emsRisk },
    });
  }
};
