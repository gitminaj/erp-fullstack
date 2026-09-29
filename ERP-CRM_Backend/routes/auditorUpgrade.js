
import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { createAuditorUpgrades, getAuditorUpgrades, updateStatusByAccreditationController, updateStatusByAccreditationHead, getSingleAuditorUpgrades, getAuditorUpgradesCsv, deleteAuditorUpgrade, updateAuditorUpgrade, getAuditors } from "../controllers/auditorUpgrade.js";
import { upload } from "../middleware/file.js";

const router = express.Router();

router.post("/create", verifyToken, upload.fields([{ name: "auditLogsFile", maxCount: 10 },]), createAuditorUpgrades)
router.get("/getauditorUpgrades", getAuditorUpgrades)
router.get("/singleAuditorUpgrades/:id", getSingleAuditorUpgrades)
router.get("/get/auditors", getAuditors)
router.get("/auditorUpgrades", getAuditorUpgradesCsv)
router.put("/auditorUpgrades/:id", verifyToken, updateAuditorUpgrade)
router.delete("/auditorUpgrades/:id", verifyToken, deleteAuditorUpgrade)
router.put("/update-status/controller/:id", verifyToken, updateStatusByAccreditationController);
router.put("/update-status/head/:id", verifyToken, updateStatusByAccreditationHead);

export default router;
