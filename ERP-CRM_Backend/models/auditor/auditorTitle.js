import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorTitle = sequelize.define("AuditorTitle", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditortitles",
});


export default AuditorTitle;
