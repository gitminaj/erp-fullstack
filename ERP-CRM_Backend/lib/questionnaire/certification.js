import Certification from "../../models/questionnaire/certificationType.js";

const certificationsTypes = [
  "New",
  "Renewal",
  "Transfer",
  "Scope Extension",
  "Site Addition",
  "Transition",
  "Certification(FSSAI(Sch IV) only)",
  "Transfer Cum Renewal",
  "Transfer Cum Stage1",
];

export const seedCertification = async () => {
  for (const certificationType of certificationsTypes) {
    await Certification.findOrCreate({
      where: { name: certificationType },
    });
  }
};
