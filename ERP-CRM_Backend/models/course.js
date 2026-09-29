import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import User from "./user.js";

export const Course = sequelize.define(
  "Course",
  {
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createBy: {
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
    },
  },
  {
    tableName: "courses",
  }
);

Course.belongsTo(User, { foreignKey: "createBy" });

export default Course;
