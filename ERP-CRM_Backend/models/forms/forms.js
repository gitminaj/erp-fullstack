import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const DocumentsForms = sequelize.define(
  "DocumentsForms",
  {
    htmlForm: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    generatedId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "documentsForms",
  }
);

export default DocumentsForms;
