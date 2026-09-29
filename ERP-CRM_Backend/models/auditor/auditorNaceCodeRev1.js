import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const NaceCodeRev1 = sequelize.define("NaceCodeRev1", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "naceCodeRev1",
});


export default NaceCodeRev1;
