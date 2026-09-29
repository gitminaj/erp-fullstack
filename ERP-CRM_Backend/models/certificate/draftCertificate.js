import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import User from "../user.js";

export const DraftCertificate = sequelize.define(
    "DraftCertificate",
    {
        draftPreparedDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        draftIssuedDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        modeOfCommunication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SendToClient: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        sendtozone: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        operationHead: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        remarks: {
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
        tableName: "draft_certificate",
    }
);


DraftCertificate.belongsTo(User, {
    foreignKey: "createdBy",
    targetKey: "id"
});

export default DraftCertificate;
