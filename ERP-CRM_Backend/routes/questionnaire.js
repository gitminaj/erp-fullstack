import express from "express";
import {
  getZone,
  getCertification,
  getSurveillance,
  create,
  getQuestionnaire,
  getSingleQuestionnaire,
  updateQuestionnaire,
  deleteQuestionnaire,
  getContractReview
} from "../controllers/questionnaireController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/get", getQuestionnaire);
router.get("/zone", getZone);
router.get("/certification", getCertification);
router.get("/contractreview", getContractReview);
router.get("/surveillance", getSurveillance);
router.post("/create", verifyToken, create);
router.get("/get/:id", getSingleQuestionnaire);
router.put("/update/:id", updateQuestionnaire);
router.delete("/delete/:id", deleteQuestionnaire);

export default router;
