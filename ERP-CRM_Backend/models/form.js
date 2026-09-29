import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

export const FormFile = sequelize.define(
  "FormFile",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "form_files",
  }
);

export default FormFile;
