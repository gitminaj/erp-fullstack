import AuditorDocumentType from "../../models/auditor/auditorDocumentType.js";

const auditorDocumentTypes = [
  "CV / Biodata / Resume",
  "Educational Qualification Certificates",
  "Work Experience Letters",
  "Professional Certificates (LA Certificates & Training Certificates)",
  "Audit Logs / List of Audits conducted (This is mandatory for Team Leader / Auditor status)",
  "List of Consultancy provided",
  "PAN Card",
  "Aadhar Card",
  "Government ID",
  "Cancelled Cheque",
];

export const seedAuditorDocumentTypes = async () => {
  for (const auditorDocumentType of auditorDocumentTypes) {
    await AuditorDocumentType.findOrCreate({
      where: { name: auditorDocumentType },
    });
  }
};
