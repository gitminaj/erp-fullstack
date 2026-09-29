import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorStandards = sequelize.define("AuditorStandards", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorStandards",
});


export default AuditorStandards;
