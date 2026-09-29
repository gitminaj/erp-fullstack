import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorType = sequelize.define("AuditorType", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorType",
});


export default AuditorType;
