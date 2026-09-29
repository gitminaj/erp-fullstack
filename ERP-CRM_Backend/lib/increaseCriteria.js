import IncreaseCriteria from "../models/increaseCriteria.js";

const increasingCriteriaData = [
  {
    increasingCriteriaId: 1,
    percentage: 10,
    increasingCriteria:
      "Complicated logistics involving more than one building or location where work is carried out, e.g., a separate Design Centre must be audited [QEO]",
  },
  {
    increasingCriteriaId: 2,
    percentage: 5,
    increasingCriteria:
      "Staff speaking in more than one language (requiring interpreter(s) or preventing individual auditors from working independently). [QEO]",
  },
  {
    increasingCriteriaId: 3,
    percentage: 10,
    increasingCriteria:
      "Very large site for the number of personnel (e.g., a forest). [QEO]",
  },
  {
    increasingCriteriaId: 4,
    percentage: 10,
    increasingCriteria:
      "High degree of regulation (e.g. food, drugs, aerospace, nuclear power, etc.). [QEO]",
  },
  {
    increasingCriteriaId: 5,
    percentage: 10,
    increasingCriteria: "Highly Complex process - 10%",
  },
  {
    increasingCriteriaId: 14,
    percentage: 5,
    increasingCriteria: "Visit of any Temporary site - 5%",
  },
  {
    increasingCriteriaId: 15,
    percentage: 20,
    increasingCriteria: "Translator Used (In case of IATF 16949 Only) 20%",
  },
  {
    increasingCriteriaId: 16,
    percentage: 10,
    increasingCriteria: "Translator Used (In case of IATF 16949 Only) 10%",
  },
  {
    increasingCriteriaId: 17,
    percentage: 5,
    increasingCriteria: "In-house Laboratory [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 18,
    percentage: 5,
    increasingCriteria: "Building Area [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 19,
    percentage: 5,
    increasingCriteria: "Product Development R and D [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 20,
    percentage: 5,
    increasingCriteria:
      "Total No. of O-PRP and CCP more than 10 [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 21,
    percentage: 5,
    increasingCriteria: "Need Translator [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 22,
    percentage: 5,
    increasingCriteria: "No. of Product type and Product Line [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 23,
    percentage: 5,
    increasingCriteria:
      "If Intended User is Vulnerable to Specific Food Safety Hazard [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 24,
    percentage: 10,
    increasingCriteria:
      "Probability of higher environment impact / OH&S risk – 10% [EMS and OHSAS only]",
  },
  {
    increasingCriteriaId: 25,
    percentage: 10,
    increasingCriteria:
      "Views of interested parties – 10% [EMS and OHSMS only]",
  },
  {
    increasingCriteriaId: 26,
    percentage: 10,
    increasingCriteria:
      "Indirect aspects necessitating increase in audit time. [EMS only]",
  },
  {
    increasingCriteriaId: 27,
    percentage: 10,
    increasingCriteria:
      "Unusual environment aspects / OH&S hazards – 10% [EMS and OHSAS only]",
  },
  {
    increasingCriteriaId: 28,
    percentage: 10,
    increasingCriteria:
      "Rate of accidents and occupational diseases higher than average for the business sector [OHSMS Only]",
  },
  {
    increasingCriteriaId: 29,
    percentage: 10,
    increasingCriteria:
      "If the member of the public are present on the organizations site (e.g. hospital, schools, airport, port, train stations, public transport) [OHSMS Only]",
  },
  {
    increasingCriteriaId: 30,
    percentage: 10,
    increasingCriteria:
      "The organization is facing legal proceedings related to OHS (depending on the severity and impact of risk involved) [OHSMS Only]",
  },
  {
    increasingCriteriaId: 31,
    percentage: 10,
    increasingCriteria:
      "The temporary large presence of many (sub) contractors companies and their employees causing an increase in complexity or OHS risks (e.g. periodical shutdowns or turnaround of refineries, chemical plants, steel manufacturing plants, and other large industrial complexes) [OHSMS Only]",
  },
  {
    increasingCriteriaId: 32,
    percentage: 10,
    increasingCriteria:
      "Where dangerous substances are present in quantities exposing the plant to the risk of major industrial accidents, in accordance with the applicable national regulations, and/or risk assessment documentation [OHSMS Only]",
  },
  {
    increasingCriteriaId: 33,
    percentage: 10,
    increasingCriteria:
      "Organization with sites included in the scope in other countries than the mother site country (if legislation and language are not well known) [OHSMS Only]",
  },
  {
    increasingCriteriaId: 34,
    percentage: 5,
    increasingCriteria:
      "Control of externally provided functions or processes (outsourcing): can adversely affect the organization’s ability to control its own OHS risks [OHSMS Only]",
  },
  {
    increasingCriteriaId: 35,
    percentage: 10,
    increasingCriteria:
      "System covers highly complex processes or relatively high number of unique activities. [QEO]",
  },
  {
    increasingCriteriaId: 36,
    percentage: 5,
    increasingCriteria:
      "Activities that require visiting temporary sites to confirm the activities of the permanent site(s) whose management system is subject to certification. [QEO]",
  },
  {
    increasingCriteriaId: 37,
    percentage: 5,
    increasingCriteria: "Outsourced functions or processes. [QEO]",
  },
  {
    increasingCriteriaId: 38,
    percentage: 10,
    increasingCriteria:
      "Activities considered to be of high risk (for QMS only)",
  },
  {
    increasingCriteriaId: 40,
    percentage: 10,
    increasingCriteria:
      "Additional or unusual environmental aspects or regulated conditions for the sector. [EMS Only]",
  },
  {
    increasingCriteriaId: 41,
    percentage: 10,
    increasingCriteria:
      "Risks of environmental accidents and impacts arising, or likely to arise, as consequences of incidents, accidents, and potential emergency situations, previous environmental problems that the organization has contributed to. [EMS Only]",
  },
  {
    increasingCriteriaId: 42,
    percentage: 10,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: More than 2 range of products [MD-QMS]",
  },
  {
    increasingCriteriaId: 43,
    percentage: 15,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: More than 5 range of products [MD-QMS]",
  },
  {
    increasingCriteriaId: 44,
    percentage: 20,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: 50-10 range of products [MD-QMS]",
  },
  {
    increasingCriteriaId: 45,
    percentage: 10,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: Class I devices are low-risk devices. Examples include bandages, handheld surgical instruments, and non-electric wheelchairs. [MD-QMS]",
  },
  {
    increasingCriteriaId: 46,
    percentage: 15,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: Class II devices are intermediate-risk devices. [MD-QMS]",
  },
  {
    increasingCriteriaId: 47,
    percentage: 30,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: Class III devices are high-risk devices that are very important to health or sustaining life [MD-QMS]",
  },
  {
    increasingCriteriaId: 48,
    percentage: 10,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: User complexity [MD-QMS]",
  },
  {
    increasingCriteriaId: 49,
    percentage: 20,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: Engineering complexity [MD-QMS]",
  },
  {
    increasingCriteriaId: 50,
    percentage: 30,
    increasingCriteria:
      "Number of ranges and/or complexity of medical devices: Technology complexity [MD-QMS]",
  },
  {
    increasingCriteriaId: 51,
    percentage: 0,
    increasingCriteria:
      "Manufacturers using suppliers to supply processes or parts that are critical to the function of the medical device and/or the safety of the user or finished products, including own label products. When the manufacturer cannot provide sufficient evidence for conformity with audit criteria, then additional time may be allowed for each supplier to be audited. [0.5 to 1 man-day.]",
  },
  {
    increasingCriteriaId: 52,
    percentage: 0,
    increasingCriteria:
      "Manufacturers who install product on customer’s premises. [0.5 to 1 man-day site visit activities – 1 Man-day and 0.5 Man-day for Installation records review.]",
  },
  {
    increasingCriteriaId: 53,
    percentage: 0,
    increasingCriteria:
      "Poor regulatory compliance by the manufacturer [0.5 man-day.]",
  },
  {
    increasingCriteriaId: 54,
    percentage: 0,
    increasingCriteria:
      "Multiple shifts, number of production lines etc. may increase audit duration [0.5 man-day.]",
  },
  {
    increasingCriteriaId: 55,
    percentage: 10,
    increasingCriteria:
      "Higher sensitivity of receiving environment compared to typical location for the industry sector [EMS only]",
  },
  {
    increasingCriteriaId: 56,
    percentage: 5,
    increasingCriteria:
      "Additional travel time from one department to other for larger organization within the same premise. [FSMS Only] 5%",
  },
  {
    increasingCriteriaId: 60,
    percentage: 5,
    increasingCriteria:
      "Staff speaking more than one language [ISMS / PIMS / ISMS-PIMS] - 5%",
  },
  {
    increasingCriteriaId: 61,
    percentage: 10,
    increasingCriteria: "Complicated Logistics [ISMS / PIMS / ISMS-PIMS] – 10%",
  },
  {
    increasingCriteriaId: 62,
    percentage: 5,
    increasingCriteria:
      "Visit to temporary  site [ISMS / PIMS / ISMS-PIMS] - 5%",
  },
];

export const seedIncreaseCriteria = async () => {
  try {
    await IncreaseCriteria.bulkCreate(
      increasingCriteriaData.map((data) => ({
        increasingCriteriaId: data.increasingCriteriaId,
        percentage: data.percentage,
        increasingCriteria: data.increasingCriteria,
      })),
      {
        updateOnDuplicate: [
          "increasingCriteriaId",
          "percentage",
          "increasingCriteria",
        ],
      }
    );
    console.log("IncreaseCriteria seeded successfully.");
  } catch (error) {
    console.error("Error seeding auditor standards:", error);
  }
};
