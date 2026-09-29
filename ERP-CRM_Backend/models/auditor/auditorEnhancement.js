import { DataTypes, Op } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorFileType from "./auditorFileType.js";
import AuditorStandards from "./auditorStandards.js"
import User from "../user.js";


const AuditorEnhancement = sequelize.define("AuditorEnhancement", {
    auditorEnhancementNo: {
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
    selectFileType: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: AuditorFileType,
            key: "name",
        },
    },
    browseFileType: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            const rawValue = this.getDataValue("browseFileType");
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue("browseFileType", JSON.stringify(value));
        },
    },
    enhancementCompetencyRemarks: {
        type: DataTypes.STRING,
        allowNull: true,
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
        beforeCreate: async (auditorEnhancement) => {
            const currentDate = new Date();
            const currentMonthYear = currentDate
                .toLocaleString("en-US", {
                    month: "2-digit",
                    year: "2-digit",
                })
                .replace("/", "");
            const count = await AuditorEnhancement.count({
                where: {
                    auditorEnhancementNo: {
                        [Op.like]: `${currentMonthYear}%`,
                    },
                },
            });
            const serialNumber = String(count + 1).padStart(6, "0");
            auditorEnhancement.auditorEnhancementNo = `${currentMonthYear}/${serialNumber}`;
        },
    },
})



AuditorEnhancement.belongsTo(User, {
    foreignKey: "selectAuditor",
    targetKey: "id",
});

User.hasMany(AuditorEnhancement, { foreignKey: "selectAuditor", sourceKey: "id" });

AuditorEnhancement.belongsTo(AuditorStandards, {
    foreignKey: "scheme",
    targetKey: "name",
});

AuditorStandards.hasMany(AuditorEnhancement, { foreignKey: "scheme", sourceKey: "name" });

AuditorEnhancement.belongsTo(AuditorFileType, {
    foreignKey: "selectFileType",
    targetKey: "name",
});

AuditorFileType.hasMany(AuditorEnhancement, { foreignKey: "selectFileType", sourceKey: "name" });


export default AuditorEnhancement;