import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

export const DecisionMaker = sequelize.define(
    "DecisionMaker",
    {

        verificationOfTheIATF1: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        verificationOfTheIATF2: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        verificationOfTheIATF3: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        verificationOfTheIATF4: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        status: {
            type: DataTypes.ENUM("Approved", "Rejected"),
            allowNull: true,
        },
        decisionMakerRecommendation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        decisionMaker: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        tableName: "decision_maker",
    }
);

export default DecisionMaker;
