import express from "express";
import {
  createLead,
  getLeadById,
  getLeads,
  getRoles,
  updateLead,
  deleteLead,
  leadHistory,
  customerLogin,
  getLeadStatus,
  getLeadType,
  getSourceOfLead,
  getLeadQualification,
  // seedAllLeads,
} from "../controllers/leadController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();
// router.get("/seed-lead",seedAllLeads)
router.post("/leads", verifyToken, createLead);
router.post("/customer-login", customerLogin);
router.get("/leads", getLeads);
router.get("/qualification", getLeadQualification);
router.get("/status", getLeadStatus);
router.get("/source", getSourceOfLead);
router.get("/type", getLeadType);
router.get("/roles", getRoles);
router.get("/history", leadHistory);
router.get("/leads/:id", getLeadById);
router.put("/leads/:id", updateLead);
router.delete("/leads/:id", deleteLead);

export default router;
