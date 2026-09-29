import express from "express";
import {
  createLeadForm,
  getAllLeadForms,
  getLeadFormById,
  updateLeadFormById,
  deleteLeadFormById,
  getLeadForms,
} from "../controllers/leadFormController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createLeadForm);
router.get("/", getAllLeadForms);
router.get("/forms", getLeadForms);
router.get("/:id", getLeadFormById);
router.put("/:id", updateLeadFormById);
router.delete("/:id", deleteLeadFormById);

export default router;
