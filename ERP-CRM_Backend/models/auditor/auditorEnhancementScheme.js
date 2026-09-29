import { DataTypes, Op } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorFileType from "./auditorFileType.js";
import AuditorStandards from "./auditorStandards.js"
import User from "../user.js";
import AuditorApplyFor from "./auditorApplyFor.js";


const AuditorEnhancementScheme = sequelize.define("AuditorEnhancementScheme", {
    auditorEnhancementSchemeNo: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    selectAuditor: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //     model: User,
        //     key: "id",
        // },
    },
    scheme: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: AuditorStandards,
            key: "name",
        },
    },
    enhancementTo: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: AuditorApplyFor,
            key: "name"
        }
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
    enhancementSchemeRemarks: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM("Review", "Accept", "Reject", "Pending"),
        allowNull: true,
        defaultValue: "Pending",
    },
}, {
    hooks: {
        beforeCreate: async (auditorEnhancementSchemeNo) => {
            const currentDate = new Date();
            const currentMonthYear = currentDate
                .toLocaleString("en-US", {
                    month: "2-digit",
                    year: "2-digit",
                })
                .replace("/", "");
            const count = await AuditorEnhancementScheme.count({
                where: {
                    auditorEnhancementSchemeNo: {
                        [Op.like]: `${currentMonthYear}%`,
                    },
                },
            });
            const serialNumber = String(count + 1).padStart(6, "0");
            auditorEnhancementSchemeNo.auditorEnhancementSchemeNo = `${currentMonthYear}/${serialNumber}`;
        },
    },
})



// AuditorEnhancementScheme.belongsTo(User, {
//     foreignKey: "selectAuditor",
//     targetKey: "id",
// });

// User.hasMany(AuditorEnhancementScheme, { foreignKey: "selectAuditor", sourceKey: "id" });

AuditorEnhancementScheme.belongsTo(AuditorStandards, {
    foreignKey: "scheme",
    targetKey: "name",
});

AuditorStandards.hasMany(AuditorEnhancementScheme, { foreignKey: "scheme", sourceKey: "name" });

AuditorEnhancementScheme.belongsTo(AuditorFileType, {
    foreignKey: "selectFileType",
    targetKey: "name",
});

AuditorFileType.hasMany(AuditorEnhancementScheme, { foreignKey: "selectFileType", sourceKey: "name" });

AuditorEnhancementScheme.belongsTo(AuditorApplyFor, {
    foreignKey: "enhancementTo",
    targetKey: "name",
});

AuditorApplyFor.hasMany(AuditorEnhancementScheme, { foreignKey: "enhancementTo", sourceKey: "name" });


export default AuditorEnhancementScheme;