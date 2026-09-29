import express from "express";
import {
    createDraftCertificate,
    getAllDraftCertificates,
    getDraftCertificateById,
    updateDraftCertificate,
    deleteDraftCertificate,
} from "../../controllers/certificate/draftCertificateController.js";

import { verifyToken } from "../../middleware/authMiddleware.js"
const router = express.Router();

router.post("/", verifyToken, createDraftCertificate);
router.get("/", getAllDraftCertificates);
router.get("/:id", getDraftCertificateById);
router.put("/:id", updateDraftCertificate);
router.delete("/:id", deleteDraftCertificate);

export default router;
