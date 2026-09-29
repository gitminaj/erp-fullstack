import { DataTypes, Op } from "sequelize";
import sequelize from "../lib/db.js";
import User from "./user.js";
import LeadQualification from "./leadQualification.js";

export const LeadType = sequelize.define(
  "LeadType",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "lead_types",
  }
);

export const LeadStatus = sequelize.define(
  "LeadStatus",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "lead_status",
  }
);

export const SourceOFLead = sequelize.define(
  "SourceOFLead",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "source_of_leads",
  }
);

export const Lead = sequelize.define(
  "Lead",
  {
    leadTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: LeadType,
        key: "id",
      },
    },
    leadStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: LeadStatus,
        key: "id",
      },
    },
    sourceOfLeadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SourceOFLead,
        key: "id",
      },
    },
    leadReferenceNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    bdName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    requirementFor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leadQualification: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: LeadQualification,
        key: "name",
      },
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPerson: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    createdBy: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "leads",
    hooks: {
      beforeCreate: async (lead) => {
        const currentDate = new Date();
        const currentMonthYear = currentDate
          .toLocaleString("en-US", {
            month: "2-digit",
            year: "2-digit",
          })
          .replace("/", "");
        const count = await Lead.count({
          where: {
            leadReferenceNumber: {
              [Op.like]: `${currentMonthYear}%`, 
            },
          },
        });
        const serialNumber = String(count + 1).padStart(6, "0");
        lead.leadReferenceNumber = `${currentMonthYear}/${serialNumber}`;
      },
    },
  }
);

Lead.belongsTo(LeadQualification, {
  foreignKey: "leadQualification",
  targetKey: "name",
});
LeadQualification.hasMany(Lead, {
  foreignKey: "leadQualification",
  sourceKey: "name",
});

Lead.belongsTo(User, { foreignKey: "contactPerson" });
Lead.belongsTo(User, { foreignKey: "bdName" });

LeadType.hasMany(Lead, { foreignKey: "leadTypeId" });
Lead.belongsTo(LeadType, { foreignKey: "leadTypeId" });

LeadStatus.hasMany(Lead, { foreignKey: "leadStatusId" });
Lead.belongsTo(LeadStatus, { foreignKey: "leadStatusId" });

SourceOFLead.hasMany(Lead, { foreignKey: "sourceOfLeadId" });
Lead.belongsTo(SourceOFLead, { foreignKey: "sourceOfLeadId" });
