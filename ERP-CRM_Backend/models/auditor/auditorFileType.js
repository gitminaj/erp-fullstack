import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorFileType = sequelize.define("AuditorFileType", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorFileType",
});


export default AuditorFileType;
