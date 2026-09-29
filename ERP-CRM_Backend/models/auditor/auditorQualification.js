import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import Zone from "../questionnaire/zone.js";
import AuditorType from "./auditorType.js";
import { User } from "../user.js";
import bcrypt from "bcryptjs";

export const generateRandomString = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const AuditorQualification = sequelize.define(
  "AuditorQualification",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Zone,
        key: "name",
      },
    },
    auditorSelectType: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: AuditorType,
        key: "name",
      },
    },
    mobileNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scheme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    selectCV: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approvalStatus: {
      type: DataTypes.ENUM("Rejected", "Approved"),
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    hooks: {
      beforeValidate: (AuditorQualification) => {
        if (!AuditorQualification.password) {
          const emailPrefix = AuditorQualification.email.slice(0, 4);
          const randomPart = generateRandomString(4);
          AuditorQualification.password = emailPrefix + randomPart;
        }
      },
      beforeCreate: async (auditor) => {
        if (auditor.password) {
          const salt = await bcrypt.genSalt(10);
          auditor.password = await bcrypt.hash(auditor.password, salt);
        }
      },
      beforeUpdate: async (auditor) => {
        if (auditor.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          auditor.password = await bcrypt.hash(auditor.password, salt);
        }
      },
    },
  }
);

// Relationships (unchanged)
AuditorQualification.belongsTo(AuditorType, {
  foreignKey: "auditorSelectType",
  targetKey: "name",
});

AuditorType.hasMany(AuditorQualification, {
  foreignKey: "auditorSelectType",
  sourceKey: "name",
});

AuditorQualification.belongsTo(User, {
  foreignKey: "createdBy",
  targetKey: "id",
});

User.hasMany(AuditorQualification, {
  foreignKey: "createdBy",
  sourceKey: "id",
});

AuditorQualification.belongsTo(Zone, {
  foreignKey: "zone",
  targetKey: "name",
});

Zone.hasMany(AuditorQualification, {
  foreignKey: "zone",
  sourceKey: "name",
});

export default AuditorQualification;
