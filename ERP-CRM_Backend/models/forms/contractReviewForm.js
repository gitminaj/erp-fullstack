import { DataTypes, Op } from "sequelize";
import sequelize from "../../lib/db.js";
import User from "../../models/user.js"
import { Lead } from "../lead.js";
import LeadForm from "../leadForm.js";

const ContractReviewForm = sequelize.define(
  "ContractReviewForm",
  {
    // Existing fields remain the same

    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    leadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id"
      }
    },

    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: LeadForm,
        key: "id"
      }
    },
    ContractNo: { // auto generate
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    organizationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scopeActivity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificationType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    standard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    justificationForExclusion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    markUsageComment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isMultisiteOrganization: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isUnderCorporateScheme: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    corporateHeaderName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usiSiteExtension: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    iafEAcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    naceRev2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    naceRev11: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // New fields from the images
    // Preparation and Approval Information
    preparedByName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preparedBySignature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preparedByDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    approvedByName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approvedBySignature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approvedByDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    // Existing Certification Status
    managementSystem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificateNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificateExpiryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    certificationBody: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usiCodesForSiteExtension: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    usiCodesForSRSL: {
      type: DataTypes.JSON,
      allowNull: true,
    },

    // Surveillance Mandays
    surveillance1Onsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance1Offsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance2Onsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance2Offsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance3Onsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance3Offsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance4Onsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance4Offsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance5Onsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    surveillance5Offsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    // Impartiality Assessment
    consultantToFirm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consultantDetails: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isTopManagementPartOfBoard: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    trainingInfluence: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    conflictOfInterestReview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Revision History
    revisionHistory: {
      type: DataTypes.JSON,
      allowNull: true,
      // Structure: [{ revisionDate, revisionNo, reason, details }]
    },

    // Existing fields continue...
    accreditationToBeGranted: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    applicationStatus: {
      type: DataTypes.ENUM("Accepted", "Declined"),
      allowNull: false,
    },

    // remaing fields
    mainSiteManPower: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mainSiteManday: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mainSiteStage1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mainSiteStage2: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mainSiteSpecialAudit: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mainSiteSA1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mainSiteSA2: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mainSiteTransfer: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    // Site Extension fields
    siteExtensionManPower: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    siteExtensionManday: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    siteExtensionStage1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    siteExtensionStage2: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    siteExtensionSpecialAudit: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    siteExtensionSA1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    siteExtensionSA2: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    siteExtensionTransfer: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    // SRSL fields
    srslManPower: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    srslManday: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    srslStage1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    srslStage2: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    srslSpecialAudit: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    srslSA1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    srslSA2: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    srslTransfer: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    // Mandays Information
    totalMandays: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stage1Mandays: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stage1Onsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stage1Offsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stage2RenewalMandays: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stage2RenewalOnsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stage2RenewalOffsite: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    // Increase/Decrease in Mandays
    increasingFactor: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    decreasingFactor: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    increaseMandaysCriteria: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    decreaseMandaysCriteria: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    increaseStandard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IncsiteName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    decreaseStandard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DecsiteName: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    // New Manpower Information fields
    manpowerAtSite: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    manpowerAtSiteExtension: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manpowerAtSRSL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "contractReviewForm",
    hooks: {
      beforeCreate: async (contract) => {
        const currentDate = new Date();
        const currentMonthYear = currentDate
          .toLocaleString("en-US", {
            month: "2-digit",
            year: "2-digit",
          })
          .replace("/", "");
        const count = await ContractReviewForm.count({
          where: {
            ContractNo: {
              [Op.like]: `${currentMonthYear}%`,
            },
          },
        });
        const serialNumber = String(count + 1).padStart(6, "0");
        contract.ContractNo = `${currentMonthYear}/${serialNumber}`;
      },
    },
  }
);



ContractReviewForm.belongsTo(User, { foreignKey: "createdBy" });
ContractReviewForm.belongsTo(Lead, { foreignKey: "leadId" });
ContractReviewForm.belongsTo(LeadForm, { foreignKey: "customerId" });


export default ContractReviewForm;
