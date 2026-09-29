import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorAllocation from "../auditor/auditorAllocation.js";

export const IATFTransferAuditChecklist = sequelize.define(
    "IATFTransferAuditChecklist",
    {
        clientName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fileRef: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clientAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reviewDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },

        requirements1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements6: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements7: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements8: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        requirements9: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements10: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements11: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements12: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        requirements13: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        // Reviewed By

        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        signature: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        auditorAllocationId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: AuditorAllocation,
                key: "id",
            },
        },

    },
    {
        tableName: "IATF_transfer_audit_checklist",
    }
);



IATFTransferAuditChecklist.belongsTo(AuditorAllocation, {
    foreignKey: "auditorAllocationId",
    targetKey: "id",
})


export default IATFTransferAuditChecklist;
