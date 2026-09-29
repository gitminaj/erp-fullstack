import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const Zone = sequelize.define("Zone", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "zones",
});

export default Zone;
