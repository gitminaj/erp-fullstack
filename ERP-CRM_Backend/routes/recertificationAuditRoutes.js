import express from "express";
import {
  createRecertificationAudit,
  getAllRecertificationAudits,
  getRecertificationAuditById,
  updateRecertificationAudit,
  deleteRecertificationAudit,
} from "../controllers/recertificationAuditController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createRecertificationAudit);
router.get("/", getAllRecertificationAudits);
router.get("/:id", getRecertificationAuditById);
router.put("/:id", verifyToken, updateRecertificationAudit);
router.delete("/:id", deleteRecertificationAudit);

export default router;
