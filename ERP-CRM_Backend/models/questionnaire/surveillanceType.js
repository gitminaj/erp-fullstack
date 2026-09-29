import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const Surveillance = sequelize.define("Surveillance", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "surveillances",
});

export default Surveillance;
