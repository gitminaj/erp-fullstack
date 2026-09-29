import Role from "../models/role.js";

const roles = [
  "Administrator",
  "Managing Director",
  "Head (IRQS)",
  "Training Head",
  "Certification BDH",
  "Accreditation Head",
  "CRP(Central)",
  "Technical Reviewer",
  "Decision Maker",
  "Audit Planner",
  "Certificate Controller",
  "Contract Reviewer",
  "Contract Approve",
  "Audit Package Reviewer",
  "Auditor Application Verifier",
  "Auditor",
  "Trainer",
  "Accounts Co-ordinator",
  "Logistics Co-ordinator",
  "Business Development Executive",
  "Competence Evaluator",
  "Zonal Heads",
  "Central Co-ordinators",
  "AAF Approval (Notification Only)",
  "AAF(Approval)",
  "CRP(Approval)",
  "Audit Report Reviewer",
  "Auditor Application Reviewer",
  "Auditor Application Approval",
  "Guest Role(Questionnaire)",
  "Guest Role(Auditor Biodata)",
  "Operation Head",
  "Sales Co-ordinator",
  "Scheme Manager",
  "Suspension Manager",
  "Training Coordinator",
  "Accreditation Controller",
  "Operation Manager",
  "Zonal Coordinators",
  "Zonal Planner",
  "External Trainer",
  "TemporaryAuditor",
  "Auditor Coordinator",
  "Auto-Lead Assignment",
  "Lead Developer",
  "Auditor Login",
  "Decision Maker Surveillance",
  "Admin Report",
  "Client",
  "Regional head"
];

export const seedRoles = async () => {
  for (const roleName of roles) {
    await Role.findOrCreate({
      where: { name: roleName },
    });
  }
};
