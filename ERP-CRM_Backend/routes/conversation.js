import express from "express";
import {
  createConversation,
  updateConversation,
  deleteConversation,
  getAllConversations,
  getConversationById,
} from "../controllers/conversationController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllConversations);
router.get("/:id", getConversationById);
router.post("/create", verifyToken, createConversation);
router.put("/:id", verifyToken, updateConversation);
router.delete("/:id", verifyToken, deleteConversation);

export default router;
