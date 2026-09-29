import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

export const Role = sequelize.define("Role", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "roles",
});

export default Role;
