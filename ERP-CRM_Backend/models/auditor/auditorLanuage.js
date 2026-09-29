import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorLanuage = sequelize.define("AuditorLanuage", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorLanuage",
});


export default AuditorLanuage;
