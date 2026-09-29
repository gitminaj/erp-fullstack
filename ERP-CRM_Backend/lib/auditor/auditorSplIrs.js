import { AuditorSPL, AuditorIRS } from "../../models/auditor/auditorSplIrs.js";

const auditorSPLS = ["Yes", "No", "Ex-employee"];

export const seedAuditorSPL = async () => {
  for (const auditorSPL of auditorSPLS) {
    await AuditorSPL.findOrCreate({
      where: { name: auditorSPL },
    });
  }
};

const auditorIRSS = ["Yes", "No", "Ex-employee"];

export const seedAuditorIRS = async () => {
  for (const auditorIRS of auditorIRSS) {
    await AuditorIRS.findOrCreate({
      where: { name: auditorIRS },
    });
  }
};
