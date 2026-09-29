import AuditorType from "../../models/auditor/auditorType.js";
const auditorTypes = [
  "Stage 1",
  "Stage 2",
  "Surveillance 1",
  "Surveillance 2",
  "Surveillance 3",
  "Surveillance 4",
  "Surveillance 5",
  "Renewal Audit",
  "Scope Extension",
  "Site Addition",
  "Follow up audit",
  "Special Audit",
  "Surveillance 1 Unannounced",
  "Surveillance 2 Unannounced",
  "Surveillance 1+ Upgradation",
  "Surveillance 2+ Upgradation",
  "Surveillance 1+ Site addition",
  "Surveillance 2+ Site addition",
  "Surveillance 1+ Scope extension",
  "Surveillance 2+ Scope extension",
  "Surveillance 1+ Address Changed",
  "Surveillance 2+ Address Changed",
  "Surveillance 1+ Site deletion",
  "Surveillance 2+ Site deletion",
  "Transfer at Surveillance 1",
  "Transfer at Surveillance 2",
  "Unannounced",
  "Surveillance 1 Name Changed",
  "Surveillance 2 Name Changed",
];

export const seedAuditorTypes = async () => {
  for (const auditorType of auditorTypes) {
    await AuditorType.findOrCreate({
      where: { name: auditorType },
    });
  }
};
