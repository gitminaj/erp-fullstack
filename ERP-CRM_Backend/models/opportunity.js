import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import { Lead } from "./lead.js";

const Opportunity = sequelize.define(
  "Opportunity",
  {
    enquiryLead: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id",
      },
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Open", "Closed", "Pending"),
      defaultValue: "Open",
    },
    expectedClosureDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    estimatedQuotationAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    considerForTraining: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

Lead.hasMany(Opportunity, { foreignKey: "enquiryLead" });
Opportunity.belongsTo(Lead, { foreignKey: "enquiryLead" });

export default Opportunity;
