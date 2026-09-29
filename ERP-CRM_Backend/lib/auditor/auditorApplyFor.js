import AuditorApplyFor from "../../models/auditor/auditorApplyFor.js";

const auditorApplyFors = [
  "Provisional Auditor",
  "Auditor",
  "Auditor / Provisional Team Leader",
  "Team Leader",
  "Industry Expert",
  "N/A",
  "Provisional Auditor / Industry Expert",
  "Pre-qualified Team Leader",
  "Pre-qualified Auditor",
  "Provisional Team Leader",
  "Provisional Technical Exper"
];

export const seedAuditorApplyFors = async () => {
  for (const auditorApplyFor of auditorApplyFors) {
    await AuditorApplyFor.findOrCreate({
      where: { name: auditorApplyFor },
    });
  }
};
