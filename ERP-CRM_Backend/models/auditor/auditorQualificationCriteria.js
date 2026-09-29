import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorQualificationCriteria = sequelize.define("AuditorQualificationCriteria", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorQualificationCriteria",
});


export default AuditorQualificationCriteria;
