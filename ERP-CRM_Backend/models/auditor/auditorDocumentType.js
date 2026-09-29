import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorDocumentType = sequelize.define("AuditorDocumentType", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "auditorDocumentType",
});


export default AuditorDocumentType;
