import LeadQualification from "../models/leadQualification.js";

const lead_qualifications = [
  "Not Contacted",
  "Qualified",
  "Not Qualified",
  "Resent to coordinator ",
];

export const seedleadQualification = async () => {
  for (const leadQualification of lead_qualifications) {
    await LeadQualification.findOrCreate({
      where: { name: leadQualification },
    });
  }
};
