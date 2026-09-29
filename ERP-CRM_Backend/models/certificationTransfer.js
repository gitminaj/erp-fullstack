import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

const CertificationTransfer = sequelize.define(
  "CertificationTransfer",
  {
    organizationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certificationBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    standardStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contractDetailsCB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scopeActivity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certifiedActivitiesScope: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    certificateIssuedByAccreditedBody: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    validCertificateCopy: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    certificationCycleStage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ncrStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    auditPlanReview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    siteTransferStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    siteSupportLocationCovered: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    complaintsReceivedActionTaken: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    regulatoryEngagement: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    transferReason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    previousCertificationBodyCommunication: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    clientVisitVerification: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bodyCommunication: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    preTransferInfoSatisfactory: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recommendation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    markDisplayVerified: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    preparedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preparedSignature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preparedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    approvedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approvedSignature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approvedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }
);

export default CertificationTransfer;
