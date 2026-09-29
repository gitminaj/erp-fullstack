import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

export const Department = sequelize.define(
  "Department",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "departments",
  }
);

export default Department;
