import express from "express";
import {
  createMaster,
  getAllMasters,
  getMasterById,
  updateMaster,
  deleteMaster,
} from "../controllers/masterController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createMaster);
router.get("/", getAllMasters);
router.get("/:id", getMasterById);
router.put("/:id", updateMaster);
router.delete("/:id", verifyToken, deleteMaster);

export default router;
