import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorSubTechnicalArea = sequelize.define("AuditorSubTechnicalArea", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: "auditorSubTechnicalArea",
});


export default AuditorSubTechnicalArea;
