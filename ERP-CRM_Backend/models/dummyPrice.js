import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

const DummyPrice = sequelize.define(
  "DummyPrice",
  {
    standard: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    applicationFees: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    accreditationFees: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    auditFeesPerManday: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default DummyPrice;
