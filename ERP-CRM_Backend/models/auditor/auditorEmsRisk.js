import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const EmsRisk = sequelize.define(
  "IAFCodesPartWise",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "EmsRisk",
  }
);

export default EmsRisk;
