import { LeadType, LeadStatus, SourceOFLead } from "../models/lead.js";

const lead_types = ["Hot", "Cold", "Warm"];

export const seedLeadTypes = async () => {
  for (const lead_type of lead_types) {
    await LeadType.findOrCreate({
      where: { name: lead_type },
    });
  }
};

const lead_status = [
  "Call Back",
  "Application Form sent",
  "Application Form Received",
  "Assigned",
  "Not Contacted",
  "Contacted",
  "Converted",
  "Not converted ",
  "Follow Up",
  "Pre-Qualified",
  "Resend to Sales Coordinator",
  "Unable to Contact",
  "No Requirement",
];

export const seedLeadStatus = async () => {
  for (const lead_s of lead_status) {
    await LeadStatus.findOrCreate({
      where: { name: lead_s },
    });
  }
};

const source_of_lead = [
  "Internal",
  "External",
  "Digital",
  "Other",
  "Exibition",
  "Client Reference",
  "Consultant Reference",
  "Self",
  "Incoming Calls",
  "Website Lead",
  "Chatbot Lead",
  "E-Campaign",
  "Brand Samosa",
];

export const seedSourceOfLead = async () => {
  for (const source_lead of source_of_lead) {
    await SourceOFLead.findOrCreate({
      where: { name: source_lead },
    });
  }
};
