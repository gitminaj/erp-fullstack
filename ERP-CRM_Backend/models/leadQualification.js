import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

export const LeadQualification = sequelize.define(
  "LeadQualification",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "lead_qualifications",
  }
);

export default LeadQualification;
