import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import { Lead } from "./lead.js";

export const Transaction = sequelize.define(
  "Transaction",
  {
    leadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id",
      },
    },
    poUpload: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoiceUpload: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approvalBy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createBy: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "transactions",
  }
);

Transaction.belongsTo(Lead, { foreignKey: "leadId" });

export default Transaction;
