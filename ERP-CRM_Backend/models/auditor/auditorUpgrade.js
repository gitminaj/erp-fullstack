import { DataTypes, Op } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorUpgradeCsv from "./auditorUpgradeCsv.js";
import AuditorStandards from "./auditorStandards.js";
import User from "../user.js";

const AuditorUpgrade = sequelize.define("AuditorUpgrade", {
    auditorUpgradeNo: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    selectAuditorName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    selectAuditor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id",
        },
    },
    scheme: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: AuditorStandards,
            key: "name",
        },
    },
    upgradeTo: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: AuditorUpgradeCsv,
            key: "name",
        },
    },
    nameOfClient: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    auditStartDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    auditEndDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    noOfMandays: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nameOfEvaluator: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    auditLogsFile: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            const rawValue = this.getDataValue("auditLogsFile");
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue("auditLogsFile", JSON.stringify(value));
        },
    },
    evaluationReport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    upgradationRemark: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("Review", "Accept", "Reject", "Pending"),
        allowNull: true,
        defaultValue: "Pending",
    },
    approvedByController: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: "id"
        }
    },
    remarksController: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    commentsController: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    approvedByHead: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: "id"
        }
    },
    remarksHead: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    commentsHead: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    hooks: {
        beforeCreate: async (auditorUpgrade) => {
            const currentDate = new Date();
            const currentMonthYear = currentDate
                .toLocaleString("en-US", {
                    month: "2-digit",
                    year: "2-digit",
                })
                .replace("/", "");
            const count = await AuditorUpgrade.count({
                where: {
                    auditorUpgradeNo: {
                        [Op.like]: `${currentMonthYear}%`,
                    },
                },
            });
            const serialNumber = String(count + 1).padStart(6, "0");
            auditorUpgrade.auditorUpgradeNo = `${currentMonthYear}/${serialNumber}`;
        },
    },
});

AuditorUpgrade.belongsTo(User, {
    foreignKey: "selectAuditor",
    targetKey: "id",
});

User.hasMany(AuditorUpgrade, { foreignKey: "selectAuditor", sourceKey: "id" });

AuditorUpgrade.belongsTo(AuditorStandards, {
    foreignKey: "scheme",
    targetKey: "name",
});

AuditorStandards.hasMany(AuditorUpgrade, { foreignKey: "scheme", sourceKey: "name" });

AuditorUpgrade.belongsTo(AuditorUpgradeCsv, {
    foreignKey: "upgradeTo",
    targetKey: "name",
});

AuditorUpgradeCsv.hasMany(AuditorUpgrade, { foreignKey: "upgradeTo", sourceKey: "name" });

export default AuditorUpgrade;
