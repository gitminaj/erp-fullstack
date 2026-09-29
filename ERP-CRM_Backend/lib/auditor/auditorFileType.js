import AuditorFileType from "../../models/auditor/auditorFileType.js";

const auditorFileTypes = [
    "Cancelled Cheque",
    "Declaration of Confidentiality",
    "Declaration of Impartiality, Conflict of Interest and Integrity",
    "Contract Agreement",
    "Emplanment Letter",
    "Audit logs or List of Audits conducted",
    "Evaluation Report",
    "PAN card",
    "Work Experience Letter-Certificate",
    "CRF(Q-29, E-30, O-31)--FSMS(69)--SMSSC(81)(NA-ISMS and EnMS)",
    "Educational Qualification",
    "Lead Auditor and Transition Certificate(NA - Industry Expert)",
    "Biodata",
    "Updated CV for Requested Code and Supporting Document(if any)",
    "Updated CV for Requested Code and Supporting Document(if any)",
];

export const seedAuditorFileTypes = async () => {
    for (const auditorFileType of auditorFileTypes) {
        await AuditorFileType.findOrCreate({
            where: { name: auditorFileType },
        });
    }
};
