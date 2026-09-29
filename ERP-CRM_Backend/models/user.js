import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import Role from "./role.js";
import Department from "./deparment.js";

export const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
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
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Department,
        key: "name",
      },
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Role,
        key: "name",
      },
    },
    permissions: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    idDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    reportedTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "users",
  }
);

User.belongsTo(Role, { foreignKey: "roleName", targetKey: "name" });
Role.hasMany(User, { foreignKey: "roleName", sourceKey: "name" });

User.belongsTo(Department, { foreignKey: "department", targetKey: "name" });
Department.hasMany(User, { foreignKey: "department", sourceKey: "name" });

export default User;
