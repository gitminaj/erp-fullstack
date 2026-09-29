import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import User from "./user.js";
import { Lead } from "./lead.js";

export const Conversation = sequelize.define(
  "Conversation",
  {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    commentUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    leadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id",
      },
    },
    createdBy: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "conversations",
  }
);

Conversation.belongsTo(User, { foreignKey: "commentUser" });
User.hasMany(Conversation, { foreignKey: "commentUser" });

Conversation.belongsTo(Lead, { foreignKey: "leadId" });
Lead.hasMany(Conversation, { foreignKey: "leadId" });

export default Conversation;
