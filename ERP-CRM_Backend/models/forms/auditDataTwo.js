import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditDataTwo = sequelize.define(
  "AuditDataTwo",
  {
    employeesFrom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    employeesTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    auditManDays: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "auditDataTwo",
  }
);

export default AuditDataTwo;
