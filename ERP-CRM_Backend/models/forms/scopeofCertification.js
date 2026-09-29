import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorAllocation from "../auditor/auditorAllocation.js";

export const ScopeOfCertification = sequelize.define(
  "ScopeOfCertification",
  {
    nameOfTheOrganization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fileRef: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stageType: {
      type: DataTypes.ENUM('Stage I', 'Renewal', 'Transfer'),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    standard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recommendedScopeMainSite: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    exclusions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    recommendedScopeStatement: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {
        afterSales: false,
        facilityManagement: false,
        purchasing: false,
        training: false,
        calibration: false,
        hr: false,
        rAndD: false,
        warehousing: false,
        contractReview: false,
        informationTechnologies: false,
        repair: false,
        warrantyManagement: false,
        qualityManagementSystem: false,
        laboratory: false,
        sales: false,
        continuousImprovement: false,
        customerService: false,
        logistics: false,
        sequencing: false,
        finance: false,
        productDesign: false,

        maintenance: false,
        servicing: false,
        internalAuditManagement: false,
        processDesign: false,
        marketing: false,
        strategicPlanning: false,

        managementReview: false,
        distribution: false,
        packaging: false,
        supplierManagement: false,
        productionEquipmentDevelopment: false,
        engineering: false,
        policyMaking: false,
        testing: false,
        nil: false,
      }
    },

    // Confirmation Details
    teamLeaderName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamLeaderSignature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    auditeeName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    auditeeSignature: {
      type: DataTypes.STRING,
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
    tableName: "scopeof_certification",
  }
);


ScopeOfCertification.belongsTo(AuditorAllocation, {
  foreignKey: "auditorAllocationId",
  targetKey: "id",
})


export default ScopeOfCertification;
