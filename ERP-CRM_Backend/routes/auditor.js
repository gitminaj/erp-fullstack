// routes/auditorRoutes.js
import express from "express";
import {
  getAuditorFileType,
  getAuditorLanguageProficiency,
  getAuditorMainTechnicalArea,
  getAuditorSubTechnicalArea,
  getAuditorNaceRev1,
  getCountry,
  getAuditorIAFCodes,
  getAuditorNaceRev2,
  approvalStatusByTechnicalReviewer,
  getAuditorDocumentTypes,
  getAuditorApplyFors,
  getAuditorLanguage,
  getAuditorIisPartOfIRS,
  getAuditorIndustry,
  getAuditorIsPartOfISSPL,
  getAuditorQualificationCriteria,
  getAuditorStandards,
  getAuditorTitles,
  createAuditor,
  getAllAuditors,
  getAuditorById,
  deleteAuditor,
  updateAuditor,
  getAuditorEmsRisk,
} from "../controllers/auditorController.js";
import { upload } from "../middleware/file.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/auditors",
  verifyToken,
  upload.fields([{ name: "uploadFile", maxCount: 1 }]),
  createAuditor
);
router.put("/status/:id", verifyToken, approvalStatusByTechnicalReviewer);
router.get("/auditors", getAllAuditors);
router.get("/auditors/:id", getAuditorById);
router.put("/auditors/:id", verifyToken, updateAuditor);
router.delete("/auditors/:id", deleteAuditor);
/* CSV FIELS */
router.get("/naceCodeRev1", getAuditorNaceRev1);
router.get("/auditorIAFCodes", getAuditorIAFCodes);
router.get("/auditorNaceRev2", getAuditorNaceRev2);
router.get("/auditorEmsRisk", getAuditorEmsRisk);
router.get("/auditorApplyFors", getAuditorApplyFors);
router.get("/auditorIisPartOfIRS", getAuditorIisPartOfIRS);
router.get("/auditorIndustry", getAuditorIndustry);
router.get("/auditorIsPartOfISSPL", getAuditorIsPartOfISSPL);
router.get("/auditorQualificationCriteria", getAuditorQualificationCriteria);
router.get("/auditorStandards", getAuditorStandards);
router.get("/auditorTitles", getAuditorTitles);
router.get("/auditorLanuage", getAuditorLanguage);
router.get("/auditorLanuageProficiency", getAuditorLanguageProficiency);
router.get("/auditorDocumentTypes", getAuditorDocumentTypes);
router.get("/auditorMainTechnicalArea", getAuditorMainTechnicalArea);
router.get("/auditorSubTechnicalArea", getAuditorSubTechnicalArea);
router.get("/auditorFileType", getAuditorFileType);
router.get("/getCountry", getCountry);

export default router;
