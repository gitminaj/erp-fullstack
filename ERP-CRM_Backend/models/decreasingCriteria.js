import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

export const DecreasingCriteria = sequelize.define("DecreasingCriteria", {
  decreasingCriteriaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  decreasingCriteria: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});

export default DecreasingCriteria;
