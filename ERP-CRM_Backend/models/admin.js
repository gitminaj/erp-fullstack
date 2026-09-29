import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

const Admin = sequelize.define(
  "Admin",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "admins",
  }
);

export default Admin;
