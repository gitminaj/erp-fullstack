import DecreasingCriteria from "../models/decreasingCriteria.js";

const decreasingCriteriaData = [
  {
    decreasingCriteriaId: 6,
    percentage: 10,
    decreasingCriteria: "Low Risk products or processes (for EMS) - 10%",
  },
  {
    decreasingCriteriaId: 1,
    percentage: 15,
    decreasingCriteria:
      "Client is not 'design responsible' or other standard elements are not covered in the scope(QMS / IATF16949 only)",
  },
  {
    decreasingCriteriaId: 2,
    percentage: 10,
    decreasingCriteria:
      "Very small site for number of personnel( e.g. office complex only ) [QE]",
  },
  {
    decreasingCriteriaId: 3,
    percentage: 10,
    decreasingCriteria: "Maturity of management system. [QEO]",
  },
  {
    decreasingCriteriaId: 4,
    percentage: 10,
    decreasingCriteria: "Integrated Management System - 10%",
  },
  {
    decreasingCriteriaId: 15,
    percentage: 30,
    decreasingCriteria:
      "Upgradation - only if QMS certified by IRQS (In case of IATF16949 Only) - 30%",
  },
  {
    decreasingCriteriaId: 8,
    percentage: 10,
    decreasingCriteria:
      "Prior knowledge of the client management system (e.g., already certified to another standard by the same CAB) [QE]",
  },
  {
    decreasingCriteriaId: 25,
    percentage: 10,
    decreasingCriteria:
      "Combined audit of an integrated system of two or more compatible management Systems (here we will apply MD-11 which is IMS Man day calculation) – 10%",
  },
  {
    decreasingCriteriaId: 5,
    percentage: 20,
    decreasingCriteria: "Integrated Management System - 20%",
  },
  {
    decreasingCriteriaId: 9,
    percentage: 10,
    decreasingCriteria:
      "Non-Design Responsible (QMS / TS 16949 Only) -10% [Not applicable for EnMS]",
  },
  {
    decreasingCriteriaId: 17,
    percentage: 20,
    decreasingCriteria: "Corporate Scheme (In case of IATF16949 Only) – 20%",
  },
  {
    decreasingCriteriaId: 18,
    percentage: 40,
    decreasingCriteria:
      "Corporate Scheme No of Sites 20 and above (In case of IATF16949 Only) - 40%",
  },
  {
    decreasingCriteriaId: 19,
    percentage: 10,
    decreasingCriteria:
      "Client is not 'design responsible' or other standard elements are not covered in the scope(QMS / IATF16949 only)",
  },
  {
    decreasingCriteriaId: 20,
    percentage: 20,
    decreasingCriteria: "Maturity of management system. (QE)",
  },
  {
    decreasingCriteriaId: 21,
    percentage: 20,
    decreasingCriteria:
      "Combined audit of an integrated system of two or more compatible management Systems (here we will apply MD-11 which is IMS Man day calculation) [QEO]",
  },
  {
    decreasingCriteriaId: 22,
    percentage: 10,
    decreasingCriteria:
      "Client preparedness for certification (e.g., already certified or recognized by another 3rd party scheme) as per MD 11 guideline and III:IRQS:OPM:10 (QE)",
  },
  {
    decreasingCriteriaId: 24,
    percentage: 10,
    decreasingCriteria:
      "Where staff include a number of people who work off location e.g. salespersons, drivers, service personnel, etc. and it is possible to substantially audit compliance of their activities with the system through review of records. [QE]",
  },
  {
    decreasingCriteriaId: 32,
    percentage: 10,
    decreasingCriteria:
      "Low complexity activities,Processes involving similar and repetitive activities (e.g., Service only) [QE]",
  },
  {
    decreasingCriteriaId: 33,
    percentage: 10,
    decreasingCriteria:
      "Low complexity activities,Identical activities of low complexity performed on all shifts with appropriate evidence of equivalent performance on all shifts. [QE]",
  },
  {
    decreasingCriteriaId: 34,
    percentage: 10,
    decreasingCriteria:
      "Low complexity activities,Where a significant proportion of staff carry out a similar simple function. Repetitive process within scope (when employees perform repetitive activities). [QE]",
  },
  {
    decreasingCriteriaId: 35,
    percentage: 20,
    decreasingCriteria:
      "Some factors that may reduce the audit duration, but not by more than 20% in total from table mentioned in the III IRQS:OPM:10: the organization’s scope does not include manufacturing and is activities such as wholesale, retail, transportation or maintenance of equipment, etc.(MD-QMS)",
  },
  {
    decreasingCriteriaId: 36,
    percentage: 15,
    decreasingCriteria:
      "Some factors that may reduce the audit duration, but not by more than 20% in total from table mentioned in the III IRQS:OPM:10: reduction of the manufacturer product range since last audit Decrease by ( 15 % for each product range )(MD-QMS)",
  },
  {
    decreasingCriteriaId: 37,
    percentage: 20,
    decreasingCriteria:
      "Some factors that may reduce the audit duration, but not by more than 20% in total from table mentioned in the III IRQS:OPM:10: reduction of the design/or production process since last audit Decrease by (MD-QMS)",
  },
  {
    decreasingCriteriaId: 38,
    percentage: 50,
    decreasingCriteria:
      "Audit durations performed solely for the certification scope of Distribution or transportation Services may be reduced up to 50% in total from table mentioned in the III IRQS:OPM:10:(MD-QMS)",
  },
  {
    decreasingCriteriaId: 51,
    percentage: 10,
    decreasingCriteria:
      "The organizations scope does not include manufacturing and is activities such as wholesale, retail, transportation, or maintenance of equipment, etc.",
  },
  {
    decreasingCriteriaId: 52,
    percentage: 10,
    decreasingCriteria:
      "Reduction of the manufacturer product range since last audit",
  },
  {
    decreasingCriteriaId: 53,
    percentage: 10,
    decreasingCriteria:
      "Reduction of the design/or production process since last audit",
  },
  {
    decreasingCriteriaId: 28,
    percentage: 10,
    decreasingCriteria:
      "Prior knowledge of the client organization’s management System (e.g. already certified in another voluntary OHSMS scheme by the same CB)(OHS Only)",
  },
  {
    decreasingCriteriaId: 29,
    percentage: 10,
    decreasingCriteria:
      "Client preparedness for OHSMS certification (e.g. already subject to periodical audits by the National Authority for a mandatory governmental OH and SMS scheme) [OHS only]",
  },
  {
    decreasingCriteriaId: 30,
    percentage: 20,
    decreasingCriteria:
      "Very small site for number of personnel( e.g. office complex only ) [OHS only]",
  },
  {
    decreasingCriteriaId: 47,
    percentage: 5,
    decreasingCriteria:
      "Planning of changes - Transition from ISO 27001:2013 to ISO 27001:2022",
  },
  {
    decreasingCriteriaId: 31,
    percentage: 5,
    decreasingCriteria: "High level of automation (QE)",
  },
  {
    decreasingCriteriaId: 16,
    percentage: 10,
    decreasingCriteria:
      "Identical activities performed on all shifts with appropriate evidence of equivalent performance on all shifts based on prior audits (internal audits and CAB audits) - 10%",
  },
  {
    decreasingCriteriaId: 40,
    percentage: 10,
    decreasingCriteria:
      "No/low risk product/processes [ISMS / PIMS / ISMS-PIMS] – 10%",
  },
  {
    decreasingCriteriaId: 41,
    percentage: 10,
    decreasingCriteria:
      "Processes involving a single general activity (e.g. service only) [ISMS / PIMS / ISMS-PIMS] – 10%",
  },
  {
    decreasingCriteriaId: 42,
    percentage: 10,
    decreasingCriteria:
      "High percentage of persons doing work under the organization’s control performing the same tasks [ISMS / PIMS / ISMS-PIMS]  – 10%",
  },
  {
    decreasingCriteriaId: 43,
    percentage: 10,
    decreasingCriteria:
      "Prior knowledge of the organization (for example, if the organization has already been certified to another standard by IRQS) [ISMS / PIMS / ISMS-PIMS] – 10%",
  },
  {
    decreasingCriteriaId: 44,
    percentage: 10,
    decreasingCriteria:
      "High client preparedness for certification (for example, already certified or recognized by another 3rd party scheme) [ISMS / PIMS / ISMS-PIMS] – 10%",
  },
  {
    decreasingCriteriaId: 45,
    percentage: 10,
    decreasingCriteria:
      "High maturity of the management system in place [ISMS / PIMS / ISMS-PIMS] – 10%",
  },
  {
    decreasingCriteriaId: 46,
    percentage: 20,
    decreasingCriteria:
      "Combined audit of an integrated system of two or more compatible management Systems (here we will apply MD-11 which is IMS Man day calculation) [ISMS / PIMS / ISMS-PIMS] – 20%",
  },
  {
    decreasingCriteriaId: 48,
    percentage: 20,
    decreasingCriteria:
      "20% of the audit time (if the audit client is a PII processor) [PIMS]",
  },
  {
    decreasingCriteriaId: 49,
    percentage: 50,
    decreasingCriteria:
      "50% of the audit time (if the audit client is both PII controller and processor) [PIMS]",
  },
  {
    decreasingCriteriaId: 50,
    percentage: 30,
    decreasingCriteria:
      "30% of the audit time (if the audit client is a PII controller) [PIMS]",
  },
];

export const seedDecreasingCriteria = async () => {
  try {
    await DecreasingCriteria.bulkCreate(
      decreasingCriteriaData.map((data) => ({
        decreasingCriteriaId: data.decreasingCriteriaId,
        percentage: data.percentage,
        decreasingCriteria: data.decreasingCriteria,
      })),
      {
        updateOnDuplicate: [
          "decreasingCriteriaId",
          "percentage",
          "decreasingCriteria",
        ],
      }
    );
    console.log("decreasingCriteriaData seeded successfully.");
  } catch (error) {
    console.error("Error seeding auditor standards:", error);
  }
};
