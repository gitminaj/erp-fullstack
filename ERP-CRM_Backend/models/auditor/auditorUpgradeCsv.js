import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorUpgradeCsv = sequelize.define("AuditorUpgradeCsv", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorUpgradeCsv",
});


export default AuditorUpgradeCsv;
