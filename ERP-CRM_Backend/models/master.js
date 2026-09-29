import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

export const Master = sequelize.define(
  "Master",
  {
    employeeForm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auditManDays: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auditmanDaysBeforeRoundingOff: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "master",
  }
);

export const RecertificationAudit = sequelize.define(
  "RecertificationAudit",
  {
    employeeForm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auditManDays: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "recertification_audit",
  }
);
