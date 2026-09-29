import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import { Lead } from "./lead.js";
import FormFile from "./form.js";
import User from "./user.js";
import Role from "./role.js";


export const generateRandomString = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const LeadForm = sequelize.define(
  "LeadForm",
  {
    leadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id",
      },
    },

    // email and password for client
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Role,
        key: "name",
      },
    },
    permissions: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    form: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: FormFile,
        key: "name",
      },
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id"
      }
    },
  },
  {
    tableName: "lead_form",
    hooks: {
      beforeCreate: (leadForm) => {
        if (!leadForm.password) {
          const emailPrefix = leadForm.email.slice(0, 4);
          const randomPart = generateRandomString(4);
          leadForm.password = emailPrefix + randomPart;
        }
      },
    },
  }
);

LeadForm.belongsTo(Lead, { foreignKey: "leadId" });
Lead.hasMany(LeadForm, { foreignKey: "leadId" });


LeadForm.belongsTo(Role, { foreignKey: "roleName", targetKey: "name" });
Role.hasMany(LeadForm, { foreignKey: "roleName", sourceKey: "name" });

LeadForm.belongsTo(FormFile, { foreignKey: "form", targetKey: "name" });
FormFile.hasMany(LeadForm, { foreignKey: "form", targetKey: "name" });

export default LeadForm;
