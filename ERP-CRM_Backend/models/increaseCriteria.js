import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

export const IncreaseCriteria = sequelize.define("IncreaseCriteria", {
  increasingCriteriaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  increasingCriteria: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});

export default IncreaseCriteria;
