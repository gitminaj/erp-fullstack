import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import Zone from "../questionnaire/zone.js";
import AuditorApplyFor from "./auditorApplyFor.js";
import AuditorTitle from "./auditorTitle.js";
import { AuditorIRS, AuditorSPL } from "./auditorSplIrs.js";
import AuditorLanuage from "./auditorLanuage.js";
import AuditorLanuagesProficiency from "./auditorLanuagesProficiency.js";
import AuditorQualificationCriteria from "./auditorQualificationCriteria.js";
import AuditorIndustry from "./auditorIndustry.js";
import AuditorStandards from "./auditorStandards.js";
import AuditorDocumentType from "./auditorDocumentType.js";
import NaceCodeRev1 from "./auditorNaceCodeRev1.js";
import NaceCodeRev2 from "./auditorNaceCodeRev2.js";
import IAFCodes from "./auditorIAFCode.js";
import EmsRisk from "./auditorEmsRisk.js";
import AuditorSubTechnicalArea from "./auditorSubTechnicalArea.js";
import AuditorMainTechnicalArea from "./auditorMainTechnicalArea.js";

const Auditor = sequelize.define("Auditor", {
  applyFor: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorApplyFor,
      key: "name",
    },
  },
  standard: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorStandards,
      key: "name",
    },
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Zone,
      key: "name",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorTitle,
      key: "name",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  isPartOfISSPL: {
    type: DataTypes.STRING,
    defaultValue: false,
    references: {
      model: AuditorSPL,
      key: "name",
    },
  },
  isPartOfIRS: {
    type: DataTypes.STRING,
    defaultValue: false,
    references: {
      model: AuditorIRS,
      key: "name",
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  educationDetails: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  languages: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: AuditorLanuage,
      key: "name",
    },
  },
  languagesProficiency: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: AuditorLanuagesProficiency,
      key: "name",
    },
  },
  expertise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pinCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contactNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobileNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  faxNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qualificationCriteria: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorQualificationCriteria,
      key: "name",
    },
  },
  industry: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorIndustry,
      key: "name",
    },
  },
  documentType: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorDocumentType,
      key: "name",
    },
  },
  uploadFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eafCodes: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: IAFCodes,
      key: "name",
    },
  },
  riskCategory: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: EmsRisk,
      key: "name",
    },
  },
  training: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otherQualifications: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  relevantSeminars: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  // work experiance

  workExperienceYears: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  organizationName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  organizationBusinessLine: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tenure: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rolesResponsibilities: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  //Close Consultancy Experience
  yearsInConsultancy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  consultancySector: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberOfClients: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },


  //Add Auditing Experience

  yearsInAuditing: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  auditedSector: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberOfMandays: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  // Close Training Experience

  yearsInTraining: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  trainingSectorSubject: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numberOfTrainings: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },


  // Standard tables field
  // iso 28000: 2007

  naceCodeRev1: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: NaceCodeRev1,
      key: "name",
    },
  },
  naceCodeRev2: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: NaceCodeRev2,
      key: "name",
    },
  },
  supplyChainRelatedExperience: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  subTechnicalAreaSCSMSSRSMS: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  mainTechnicaAreaSCSMSSRSMS: {
    type: DataTypes.TEXT,
    allowNull: true,
  },


  // IATF 16949:2016  ISO 9001:2015

  qmsRisk: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  KeyProcessInvolved: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualityControl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  productRequirement: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  applicableLegalStatutoryRequirements: {
    type: DataTypes.TEXT,
    allowNull: true,
  },


  // ISO 14001:2015
  theEnvironmentalTerminology: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  aboutTechniquesInvolvedEvaluationEnvironmental: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  knowledgeOfEnvironmentalEmergenciesPreparedness: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  knowledgeOfOperationalControlRespect: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  factorsRelatedToGeographyClimate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  duringDesignStageApproachConcept: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  emsRisk: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  keyProcessesActivities: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sectorSpecificEnvironmentalAspects: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sectorSpecificOperationalControl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sectorSpecificEnvironmentalLegal: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  applicableLegalStatutoryRequirements: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  linkWithQuestionBank: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  submitTheAnswerSheet: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  // ISO 45001:2018

  terminologyPrinciplesProcessesConcepts: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  aboutTechniquesInvolvedForHazardIdentification: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  knowledgeOfOccupationalHealthSafetyMeasurement: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  methodologyAndApproachForIncidentInvestigation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  knowledgeOfMethodologies: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  operationalControlMeasure: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  OHSRisk: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  KeyProcessesActivitiesServicesInvolved: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sectorSpecificRelatedHazards: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sectorSpecificPotentialEmergencies: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sectorSpecificWorkplaceMonitoring: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sectorSpecificOHSLegalOthers: {
    type: DataTypes.TEXT,
    allowNull: true,
  },


  // ISO 13485 : 2016

  listoutFewProductsAndServices: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  listAtLeastExamplesOfTypicalDefects: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  listAtLeastMainCriticalProcesses: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  identifyAtLeastCriticalControlPoints: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  listOutPossibleExternallyProvided: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  mainTechicalArea: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: AuditorMainTechnicalArea,
      key: "name"
    }
  },
  subTechnicalArea: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: AuditorSubTechnicalArea,
      key: "name"
    }
  },

  status: {
    type: DataTypes.ENUM("Accept", "Reject"),
    allowNull: true,
  },
});

Auditor.belongsTo(AuditorApplyFor, {
  foreignKey: "applyFor",
  targetKey: "name",
});
AuditorApplyFor.hasMany(Auditor, { foreignKey: "applyFor", sourceKey: "name" });

Auditor.belongsTo(AuditorStandards, {
  foreignKey: "standard",
  targetKey: "name",
});
AuditorStandards.hasMany(Auditor, {
  foreignKey: "standard",
  sourceKey: "name",
});

Auditor.belongsTo(Zone, { foreignKey: "zone", targetKey: "name" });
Zone.hasMany(Auditor, { foreignKey: "zone", sourceKey: "name" });

Auditor.belongsTo(AuditorTitle, { foreignKey: "title", targetKey: "name" });
AuditorTitle.hasMany(Auditor, { foreignKey: "title", sourceKey: "name" });

Auditor.belongsTo(AuditorSPL, {
  foreignKey: "isPartOfISSPL",
  targetKey: "name",
});
AuditorSPL.hasMany(Auditor, { foreignKey: "isPartOfISSPL", sourceKey: "name" });

Auditor.belongsTo(AuditorIRS, { foreignKey: "isPartOfIRS", targetKey: "name" });
AuditorIRS.hasMany(Auditor, { foreignKey: "isPartOfIRS", sourceKey: "name" });

Auditor.belongsTo(AuditorLanuage, {
  foreignKey: "languages",
  targetKey: "name",
});
AuditorLanuage.hasMany(Auditor, { foreignKey: "languages", sourceKey: "name" });

Auditor.belongsTo(AuditorLanuagesProficiency, { foreignKey: "languagesProficiency", targetKey: "name" })
AuditorLanuagesProficiency.hasMany(Auditor, { foreignKey: "languagesProficiency", sourceKey: "name" })

Auditor.belongsTo(AuditorQualificationCriteria, {
  foreignKey: "qualificationCriteria",
  targetKey: "name",
});
AuditorQualificationCriteria.hasMany(Auditor, {
  foreignKey: "qualificationCriteria",
  sourceKey: "name",
});

Auditor.belongsTo(AuditorIndustry, {
  foreignKey: "industry",
  targetKey: "name",
});
AuditorIndustry.hasMany(Auditor, { foreignKey: "industry", sourceKey: "name" });

Auditor.belongsTo(NaceCodeRev1, {
  foreignKey: "naceCodeRev1",
  targetKey: "name"
})

NaceCodeRev1.hasMany(Auditor, { foreignKey: "naceCodeRev1", sourceKey: "name" })

Auditor.belongsTo(NaceCodeRev2, {
  foreignKey: "naceCodeRev2",
  targetKey: "name"
})

NaceCodeRev2.hasMany(Auditor, { foreignKey: "naceCodeRev2", sourceKey: "name" })

Auditor.belongsTo(IAFCodes, {
  foreignKey: "eafCodes",
  targetKey: "name",
});

IAFCodes.hasMany(Auditor, { foreignKey: "eafCodes", sourceKey: "name" });


Auditor.belongsTo(EmsRisk, {
  foreignKey: "riskCategory",
  targetKey: "name",
});

EmsRisk.hasMany(Auditor, { foreignKey: "riskCategory", sourceKey: "name" });


Auditor.belongsTo(AuditorMainTechnicalArea, {
  foreignKey: "mainTechicalArea",
  targetKey: "name",
});

AuditorMainTechnicalArea.hasMany(Auditor, { foreignKey: "mainTechicalArea", sourceKey: "name" });

Auditor.belongsTo(AuditorSubTechnicalArea, {
  foreignKey: "subTechnicalArea",
  targetKey: "name",
});

AuditorSubTechnicalArea.hasMany(Auditor, { foreignKey: "subTechnicalArea", sourceKey: "name" });


export default Auditor;
