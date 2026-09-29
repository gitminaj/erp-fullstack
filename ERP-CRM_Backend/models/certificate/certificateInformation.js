import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorType from "../auditor/auditorType.js";
import Certification from "../questionnaire/certificationType.js";
import User from "../user.js"

export const CertificateInformation = sequelize.define(
    "CertificateInformation",
    {
        fileNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Client: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emailID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        websiteURL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        certificationType: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Certification,
                key: "name",
            },
        },
        auditType: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: AuditorType,
                key: "name",
            },
        },
        auditDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        recommendationDate: {
            type: DataTypes.DATE,
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
        tableName: "certificate_information",
    }
);


CertificateInformation.belongsTo(User, {
    foreignKey: "createdBy",
    targetKey: "id"
});

CertificateInformation.belongsTo(Certification, {
    foreignKey: "certificationType",
    targetKey: "name"
});

CertificateInformation.belongsTo(AuditorType, {
    foreignKey: "auditType",
    targetKey: "name"
});

export default CertificateInformation;
