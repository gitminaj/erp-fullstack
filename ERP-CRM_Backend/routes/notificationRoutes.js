import express from "express";
import {
  createNotification,
  getNotifications,
  getNotificationById,
  deleteNotification,
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/create", createNotification);
router.get("/notifications", getNotifications);
router.get("/notifications/:id", getNotificationById);
router.delete("/delete/:id", deleteNotification);

export default router;
