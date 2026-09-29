import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import User from "../user.js";
import LeadForm from "../leadForm.js";

const FormIATF = sequelize.define(
  "CertificationForm",
  {
    // Basic Information
    // bdName: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: User,
    //     key: "id",
    //   },
    // },

    createdByType: {
      type: DataTypes.ENUM("User", "Client"),
      allowNull: false,
    },
    createdById: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    questionnaireNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    invoiceAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pinCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    panNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faxNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gstDetails: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tanNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Contact Information
    contactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactDesignation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactMobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Business Activity
    businessActivity: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    desiredScopeOfCertification: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Manufacturing Site Details
    manufacturingSites: {
      type: DataTypes.JSON,
      allowNull: true,
      // Structure for single manufacturing site:
      // {
      //   address: string,
      //   product: string,
      //   language: string,
      //   outsourcedProcesses: string,
      //   nonApplicableClauses: string,
      //   hasApprovals: boolean
      // }
    },

    // Extended Manufacturing Sites
    extendedSites: {
      type: DataTypes.JSON,
      allowNull: true,
      // Structure:
      // {
      //   mainSiteAddress: string,
      //   extendedSiteAddress: string,
      //   transitTimeOrDistance: string,
      //   activities: string
      // }
    },

    // SRSL (Remote Support Locations)
    srslLocations: {
      type: DataTypes.JSON,
      allowNull: true,
      // Structure:
      // {
      //   address: string,
      //   functions: string,
      //   language: string,
      //   isAuditedByOtherBody: boolean
      // }
    },

    // Existing fields
    vendorCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerIATF: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expectedAuditDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    otherCertificationSchemes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    submittedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uniqueSiteCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificateValidUntil: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    previousCertificationBody: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    readinessAssessmentFailed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    sites: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    certificateCancelledReason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    previousIATFCertificateNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usiCodeMainSite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    srslSupportLocations: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    isSRSLAudited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    multisiteOrganisation: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isUnderConporateScheme: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    carporateHeader: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    manufacturingSites: {
      type: DataTypes.JSON,
      allowNull: true,
      // Structure:
      // [
      //   {
      //     siteType: string, // e.g., 'Main Manufacturing Site', 'Extended Site(s)', etc.
      //     noOfShifts: number,
      //     fullTimeEmployees: number,
      //     partTimeEmployees: number,
      //     contractEmployees: number,
      //     temporaryEmployees: number,
      //     averageNumberOfDailyWorkers: number
      //   }
      // ]
    },


    initialCertification: {
      type: DataTypes.ENUM("YES", "NO"),
      allowNull: true,
    },
    upgradeFromISO9001: {
      type: DataTypes.ENUM("YES", "NO", "NOT_APPLICABLE"),
      allowNull: true,
    },
    upgradeFromLOC: {
      type: DataTypes.ENUM("YES", "NO", "NOT_APPLICABLE"),
      allowNull: true,
    },
    transfer: {
      type: DataTypes.ENUM("YES", "NO"),
      allowNull: true,
    },
    renewal: {
      type: DataTypes.ENUM("YES", "NO"),
      allowNull: true,
    },
    previousIATFStatus: {
      type: DataTypes.ENUM("NOT_APPLICABLE", "YES"),
      allowNull: true,
    },
    certificationStatus: {
      type: DataTypes.ENUM("CANCELLED", "WITHDRAWN", "EXPIRED_LOC"),
      allowNull: true,
    },
    // Certification Type
    certificationType: {
      type: DataTypes.ENUM("INITIAL", "UPGRADE", "TRANSFER", "RENEWAL"),
      allowNull: true,
    },
    // assignTo: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: User,
    //     key: "id",
    //   },
    // },
  },
  {
    tableName: "certification_forms",
    timestamps: true,
  }
);

FormIATF.belongsTo(User, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "User",
  },
});

User.hasMany(FormIATF, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "User",
  },
});

FormIATF.belongsTo(LeadForm, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "LeadForm",
  },
});

LeadForm.hasMany(FormIATF, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "LeadForm",
  },
});



FormIATF.belongsTo(User, { foreignKey: "clientName", targetKey: "id" });
User.hasMany(FormIATF, { foreignKey: "clientName", sourceKey: "id" });

export default FormIATF;
