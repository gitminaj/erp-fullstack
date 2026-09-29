import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const ContractReview = sequelize.define(
  "ContractReview",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "contractReview",
  }
);

export default ContractReview;
