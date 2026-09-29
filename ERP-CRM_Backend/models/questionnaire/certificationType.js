import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const Certification = sequelize.define(
  "Certification",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "certifications",
  }
);

export default Certification;
