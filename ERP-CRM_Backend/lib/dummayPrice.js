import DummyPrice from "../models/dummyPrice.js";

const dummyPiceData = [
  {
    standard: "ISO 9001",
    components: {
      applicationFees: { "1-65": 5000, "65+": 5000 },
      accreditationFees: { "1-65": 10000, "65+": 10000 },
      auditFeesPerManday: { "1-65": 10000, "65+": 10000 },
    },
  },
  {
    standard: "ISO 14001, ISO 45001",
    components: {
      applicationFees: { "1-65": 5000, "65+": 5000 },
      accreditationFees: { "1-65": 10000, "65+": 10000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "ISO 22000",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": 20000, "65+": 20000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "HACCP, GMP",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": null, "65+": null },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "FSSC 22000",
    components: {
      applicationFees: { "1-65": 15000, "65+": 15000 },
      accreditationFees: { "1-65": 30000, "65+": 30000 },
      auditFeesPerManday: { "1-65": 20000, "65+": 20000 },
    },
  },
  {
    standard: "BRCGS",
    components: {
      applicationFees: { "1-65": 20000, "65+": 20000 },
      accreditationFees: { "1-65": 40000, "65+": 40000 },
      auditFeesPerManday: { "1-65": 30000, "65+": 30000 },
    },
  },
  {
    standard: "AYUSH",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": 15000, "65+": 15000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "IMS (Integrated)",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": 15000, "65+": 15000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "IATF 16949",
    components: {
      applicationFees: { "1-65": 15000, "65+": 15000 },
      accreditationFees: { "1-65": 25000, "65+": 25000 },
      auditFeesPerManday: { "1-65": 20000, "65+": 20000 },
    },
  },
  {
    standard: "ISO 27001, ISO 27701",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": 20000, "65+": 20000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "ISO 50001",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": 20000, "65+": 20000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "ISO 21001, ISO 28000",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": 20000, "65+": 20000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
  {
    standard: "ISO 13485",
    components: {
      applicationFees: { "1-65": 10000, "65+": 10000 },
      accreditationFees: { "1-65": 15000, "65+": 15000 },
      auditFeesPerManday: { "1-65": 15000, "65+": 15000 },
    },
  },
];

export const seedDummyPrice = async () => {
  try {
    await DummyPrice.bulkCreate(
      dummyPiceData.map((data) => ({
        standard: data.standard,
        applicationFees: data.components.applicationFees,
        accreditationFees: data.components.accreditationFees,
        auditFeesPerManday: data.components.auditFeesPerManday,
      })),
      {
        updateOnDuplicate: [
          "applicationFees",
          "accreditationFees",
          "auditFeesPerManday",
        ],
      }
    );
    console.log("Auditor standards seeded successfully.");
  } catch (error) {
    console.error("Error seeding auditor standards:", error);
  }
};
