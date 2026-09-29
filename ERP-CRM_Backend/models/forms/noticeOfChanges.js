import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorAllocation from "../auditor/auditorAllocation.js";

export const NoticeOfChanges = sequelize.define(
  "NoticeOfChanges",
  {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fileRef: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    certificateNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfIssue: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    auditCriteria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scopeChanges: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {
        changeOfScopeStatement: false,
        numberOfEmployees: false,
        changeInSites: false,
        productLineChanges: false,
        modificationOfActivities: false,
        surveillanceInterval: false,
        changeOfNameOwnership: false,
        changeOfAuditCriteria: false,
        suspensionOfCertification: false,
        withdrawalOfCertification: false,
        onSiteRemoteHybrid: false
      }
    },
    justification: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    changedInformation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    clientContact: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faxNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postalAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locations: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    clientSign: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clientDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    teamLeaderSign: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamLeaderDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },


    nocForwardedInitial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nocForwardedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    decisionMaker: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salesContractReview: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    naceCodeChange: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    additionalVisitRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    additionalManDays: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificateProduction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    newCertificateRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    effectiveDateStart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    effectiveDateEnd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    scheduling: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    databaseUpdate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reviewResults: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    eviewedbySign: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ReviewedbySignDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ApprovedbyHeadSign: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ApprovedbySignDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    auditorAllocationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
          model: AuditorAllocation,
          key: "id",
      },
  },

  },
  {
    tableName: "noticeOfChanges",
  }
);

NoticeOfChanges.belongsTo(AuditorAllocation, {
  foreignKey: "auditorAllocationId",
  targetKey: "id",
})


export default NoticeOfChanges;