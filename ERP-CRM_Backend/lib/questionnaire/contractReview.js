import ContractReview from "../../models/questionnaire/contractRevew.js";

const contractReview = [
  "New Certification",
  "Recertification",
  "Scope Extension",
  "Site Addition",
  "Transfer Assessment",
  "Transition",
  "Special Audit",
  "License of Compliance",
  "Only for TS 16949",
];

export const seedContractReview = async () => {
  for (const contract of contractReview) {
    await ContractReview.findOrCreate({
      where: { name: contract },
    });
  }
};
