import express from "express";
import {
    createAuditReport,
    getAllAuditReports,
    getAuditReportById,
    updateAuditReport,
    deleteAuditReport,
} from "../../controllers/certificate/auditReportController.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createAuditReport);
router.get("/", getAllAuditReports);
router.get("/:id", getAuditReportById);
router.put("/:id", updateAuditReport);
router.delete("/:id", deleteAuditReport);

export default router;
