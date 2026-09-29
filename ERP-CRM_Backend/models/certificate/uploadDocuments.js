import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import User from "../user.js";

export const uploadDocuments = sequelize.define(
    "uploadDocuments",
    {
        AuditPlanSchedule: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        OpeningandClosingMeetingAttendance: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        OEMCSRPlanningMatrixIATF16949: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AuditorNotesIATF16949: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        IATFDatabaseAccuracyCheckFormat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AuditReport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NCReport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        }
    },

    {
        tableName: "upload_documents",
    }
);


uploadDocuments.belongsTo(User, {
    foreignKey: "createdBy",
    targetKey: "id"
});

export default uploadDocuments;
