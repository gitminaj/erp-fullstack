import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const IAFCodesPartWise = sequelize.define(
  "IAFCodesPartWise",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "IAFCodesPartWise",
  }
);

export default IAFCodesPartWise;
