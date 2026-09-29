import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorSPL = sequelize.define("AuditorSPL", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorSPL",
});


export const AuditorIRS = sequelize.define("AuditorIRS", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: "auditorIRS",
  });
  
  
