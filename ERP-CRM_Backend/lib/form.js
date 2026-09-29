import FormFile from "../models/form.js";

const formFiles = [
  {
    name: "002-Pre-audit Information Form-REVXX",
    filePath: "uploads/002-Pre-audit Information Form-REVXX.docx",
  },
  {
    name: "03-A-Control Ide. Mat.  for ISMS-ISO 27001-2022-REV2-PIMS Scheme-REVXX",
    filePath:
      "uploads/03-A-Control Ide. Mat.  for ISMS-ISO 27001-2022-REV2-PIMS Scheme-REVXX.xlsx",
  },
  {
    name: "03-B-Control Ide. Mat. for ISMS-ISO 27001-2013-REV4-PIMS Scheme-REVXX",
    filePath:
      "uploads/03-B-Control Ide. Mat. for ISMS-ISO 27001-2013-REV4-PIMS Scheme-REVXX.xlsx",
  },
  {
    name: "004-Annex-2-Cert Transfer Checklist-REVXX",
    filePath: "uploads/004-Annex-2-Cert Transfer Checklist-REVXX.doc",
  },
  {
    name: "006-Application Form ISO 45001-REVXX",
    filePath: "uploads/006-Application Form ISO 45001-REVXX.doc",
  },
  {
    name: "008-A-Application Form-ISO27001-2022 & ISO 27701-ISMS-PIMS-REVXX",
    filePath:
      "uploads/008-A-Application Form-ISO27001-2022 & ISO 27701-ISMS-PIMS-REVXX.doc",
  },
  {
    name: "52-A-(Remote auditing)-INFORMATION FOR MANAGEMENT OF EXTRAORDINARY-REVX",
    filePath:
      "uploads/52-A-(Remote auditing)-INFORMATION FOR MANAGEMENT OF EXTRAORDINARY-REVX.doc",
  },

  {
    name: "52-INFORMATION FOR MANAGEMENT OF EXTRAORDINARY EVENTS-REVXX",
    filePath:
      "uploads/52-INFORMATION FOR MANAGEMENT OF EXTRAORDINARY EVENTS-REVXX.doc",
  },

  {
    name: "059-Application Form-IATF 16949-REVXX (Draft)",
    filePath: "uploads/059-Application Form-IATF 16949-REVXX (Draft).doc",
  },
  {
    name: "094-Application Form for QMS-REVXX",
    filePath: "uploads/094-Application Form for QMS-REVXX.doc",
  },
  {
    name: "095-Application Form for-ISO 14001-2015-EMS-REVXX",
    filePath: "uploads/095-Application Form for-ISO 14001-2015-EMS-REVXX.doc",
  },
  {
    name: "096-Application Form for QEO-IMS-Certification-REVXX",
    filePath:
      "uploads/096-Application Form for QEO-IMS-Certification-REVXX.doc",
  },
];


export const seedForms = async () => {
  try {
    for (const formFile of formFiles) {
      await FormFile.findOrCreate({
        where: { name: formFile.name },
        defaults: {
          filePath: formFile.filePath, 
        },
      });
    }
    console.log("All form files have been seeded successfully.");
  } catch (error) {
    console.error("Error seeding form files:", error);
  }
};
