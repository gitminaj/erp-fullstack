import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorIndustry = sequelize.define("AuditorIndustry", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorIndustry",
});


export default AuditorIndustry;
