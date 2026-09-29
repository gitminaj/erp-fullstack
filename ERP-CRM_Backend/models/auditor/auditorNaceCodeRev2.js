import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const NaceCodeRev2 = sequelize.define("NaceCodeRev2", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "naceCodeRev2",
});


export default NaceCodeRev2;
