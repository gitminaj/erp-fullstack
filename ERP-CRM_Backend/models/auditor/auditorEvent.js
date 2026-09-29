import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorStandards from "./auditorStandards.js";
import AuditorMainTechnicalArea from "./auditorMainTechnicalArea.js";
import AuditorSubTechnicalArea from "./auditorSubTechnicalArea.js";
import NaceCodeRev1 from "./auditorNaceCodeRev1.js";
import NaceCodeRev2 from "./auditorNaceCodeRev2.js";

const AuditorEvent = sequelize.define("Event", {
  scheme: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorStandards,
      key: "name",
    },
  },
  assessmentStartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  assessmentEndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remarkComment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  auditType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameOfClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scopeOfAudit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auditTeam: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameOfEvaluator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameOfAppraisee: {
    type: DataTypes.STRING,
    allowNull: false,
  },


  // specific scheme fields
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

});


AuditorEvent.belongsTo(AuditorStandards, {
  foreignKey: "scheme",
  targetKey: "name",
});

AuditorStandards.hasMany(AuditorEvent, { foreignKey: "scheme", sourceKey: "name" });

AuditorEvent.belongsTo(NaceCodeRev1, {
  foreignKey: "naceCodeRev1",
  targetKey: "name"
})

NaceCodeRev1.hasMany(AuditorEvent, { foreignKey: "naceCodeRev1", sourceKey: "name" })

AuditorEvent.belongsTo(NaceCodeRev2, {
  foreignKey: "naceCodeRev2",
  targetKey: "name"
})

NaceCodeRev2.hasMany(AuditorEvent, { foreignKey: "naceCodeRev2", sourceKey: "name" })

AuditorEvent.belongsTo(AuditorMainTechnicalArea, {
  foreignKey: "mainTechicalArea",
  targetKey: "name",
});

AuditorMainTechnicalArea.hasMany(AuditorEvent, { foreignKey: "mainTechicalArea", sourceKey: "name" });

AuditorEvent.belongsTo(AuditorSubTechnicalArea, {
  foreignKey: "subTechnicalArea",
  targetKey: "name",
});

AuditorSubTechnicalArea.hasMany(AuditorEvent, { foreignKey: "subTechnicalArea", sourceKey: "name" });


export default AuditorEvent;
