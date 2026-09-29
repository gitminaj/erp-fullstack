import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const AuditorLanuagesProficiency = sequelize.define("AuditorLanuagesProficiency", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: "auditorLanuagesProficiency",
});


export default AuditorLanuagesProficiency;
