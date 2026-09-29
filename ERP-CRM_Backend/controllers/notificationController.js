import { where } from "sequelize";
import { Lead } from "../models/lead.js";
import Notification from "../models/notifications.js";

// Create a new notification
export const createNotification = async (req, res) => {
  try {
    const { leadId, notificatiotype, dscription } = req.body;
    const lead = await Lead.findByPk(leadId);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const notification = await Notification.create({
      leadId,
      notificatiotype,
      dscription,
    });

    res.status(201).json({ message: "Notification created", notification });
  } catch (error) {
    res.status(500).json({ message: "Error creating notification", error });
  }
};

export const getNotifications = async (req, res) => {
  try {
    await Notification.update({ isSeen: true }, { where: { isSeen: false } });

    const notifications = await Notification.findAll({
      include: {
        model: Lead,
        attributes: ["id", "companyName"],
      },
    });
    res.status(200).json({ notifications });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications", error });
  }
};

export const getNotificationById = async (req, res) => {
  try {
    const { id } = req.params;

    await Notification.update({ isSeen: true }, { where: { isSeen: false } });

    const notification = await Notification.findByPk(id, {
      include: {
        model: Lead,
        attributes: ["id", "companyName"],
      },
    });

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json({ notification });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notification", error });
  }
};


export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByPk(id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    await Notification.destroy({ where: { id } });
    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
};
