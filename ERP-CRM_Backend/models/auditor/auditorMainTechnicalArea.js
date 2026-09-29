import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorMainTechnicalArea = sequelize.define("AuditorMainTechnicalArea", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: "auditorMainTechnicalArea",
});


export default AuditorMainTechnicalArea;
