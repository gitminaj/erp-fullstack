import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const Currency = sequelize.define("Currency", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "currency",
});

export default Currency;
