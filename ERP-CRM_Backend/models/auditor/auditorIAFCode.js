import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const IAFCodes = sequelize.define("IAFCodes", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "IAFCodes",
});


export default IAFCodes;
