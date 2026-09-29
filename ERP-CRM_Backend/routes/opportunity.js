import express from "express";
import {
  createOpportunities,
  getOpportunities,
  updateOpportunities,
  deleteOpportunities,
} from "../controllers/opportunity.js";

const router = express.Router();

router.get("/get", getOpportunities);
router.post("/create", createOpportunities);
router.put("/opportunities/:id", updateOpportunities);
router.delete("/opportunities/:id", deleteOpportunities);

export default router;
