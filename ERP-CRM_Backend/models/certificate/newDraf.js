import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import User from "../user.js";

export const NewDraf = sequelize.define(
    "NewDraf",
    {
        certificateNo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        iatfCertificateNo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nameOfTheOrganization: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extendedManufacturingSiteAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iatfUsiCodeOne: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iatfUsiCodeTwo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        certificationScope: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        issuedOn: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        validTillDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        // Site / Support Function and Location which Support

        supportFunctionAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        siteIATFUsiCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        siteScope: {
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
        tableName: "new_draf",
    }
);

NewDraf.belongsTo(User, {
    foreignKey: "createdBy",
    targetKey: "id"
});

export default NewDraf;
