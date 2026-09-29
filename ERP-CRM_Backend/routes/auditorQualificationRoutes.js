import express from "express";
import {
  auditorQualificationLogin,
  getAllAuditorTypes,
  updateApprovalStatus,
  createAuditorQualification,
  getAllAuditorQualifications,
  getAuditorQualificationById,
  updateAuditorQualification,
  deleteAuditorQualification,
} from "../controllers/auditorQualificationControllers.js";
import { upload } from "../middleware/file.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post(
  "/",
  upload.fields([{ name: "selectCV", maxCount: 1 }]),
  verifyToken,
  createAuditorQualification
);
router.post("/login", auditorQualificationLogin);
router.post("/approve/:id", verifyToken, updateApprovalStatus);
router.get("/auditortypes", getAllAuditorTypes);
router.get("/", getAllAuditorQualifications);
router.get("/:id", getAuditorQualificationById);
router.put("/:id", verifyToken, updateAuditorQualification);
router.delete("/:id", deleteAuditorQualification);

export default router;
