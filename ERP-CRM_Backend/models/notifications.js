import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import { Lead } from "./lead.js";

export const Notification = sequelize.define(
  "Notification",
  {
    leadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id",
      },
    },
    notificatiotype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dscription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSeen: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
  },
  {
    tableName: "notifications",
  }
);

Lead.hasOne(Notification, { foreignKey: "leadId" });
Notification.belongsTo(Lead, { foreignKey: "leadId" });

export default Notification;
