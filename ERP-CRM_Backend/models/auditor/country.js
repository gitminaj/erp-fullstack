import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const Country = sequelize.define("Country", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "Country",
});


export default Country;
