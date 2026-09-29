import AuditorQualificationCriteria from "../../models/auditor/auditorQualificationCriteria.js";

const auditorQualificationCriterias = [
  "Work Experience",
  "Auditing Experience",
  "Consultancy Experience",
  "Training Experience",
];

export const seedAuditorQualificationCriterias = async () => {
  for (const auditorQualificationCriteria of auditorQualificationCriterias) {
    await AuditorQualificationCriteria.findOrCreate({
      where: { name: auditorQualificationCriteria },
    });
  }
};
