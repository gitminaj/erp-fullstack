import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditDataOne = sequelize.define(
  "AuditDataOne",
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
    surveillanceAuditMandays: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "auditDataOne",
  }
);

export default AuditDataOne;
