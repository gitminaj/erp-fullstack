import express from "express";
import {
  createDecisionMaker,
  getAllDecisionMakers,
  getDecisionMakerById,
  updateDecisionMaker,
  deleteDecisionMaker,
} from "../../controllers/forms/decisionMakerController.js";

const router = express.Router();

router.post("/", createDecisionMaker);
router.get("/", getAllDecisionMakers);
router.get("/:id", getDecisionMakerById);
router.put("/:id", updateDecisionMaker);
router.delete("/:id", deleteDecisionMaker);

export default router;
