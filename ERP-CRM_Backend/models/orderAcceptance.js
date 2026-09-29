import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import User from "./user.js";
import LeadForm from "./leadForm.js";


const OrderAcceptance = sequelize.define(
    "OrderAcceptance",
    {
        standardProduct: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        scopeOfAssessment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        letterNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        totalOrderValue: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nameOfTheOrganization: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nameOfRepresentative: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        signatureDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        irqsofISSPL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        irqsName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        irqsSignatureDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            }
        },
        assignTo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: LeadForm,
                key: "id",
            }
        }
    },
    {
        tableName: "order_acceptance",
    }
);


OrderAcceptance.belongsTo(User, { foreignKey: "createdBy" });
OrderAcceptance.belongsTo(LeadForm, { foreignKey: "assignTo" });

export default OrderAcceptance;
