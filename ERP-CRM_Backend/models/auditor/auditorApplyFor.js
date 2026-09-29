import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorApplyFor = sequelize.define("AuditorApplyFor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorApplyFor",
});


export default AuditorApplyFor;
