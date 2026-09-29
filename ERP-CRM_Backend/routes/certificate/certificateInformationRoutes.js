import express from "express";
import {
    createCertificateInformation,
    getAllCertificateInformation,
    getCertificateInformationById,
    updateCertificateInformation,
    deleteCertificateInformation,
} from "../../controllers/certificate/certificateInformationController.js";
import { verifyToken } from "../../middleware/authMiddleware.js"


const router = express.Router();

router.post("/", verifyToken, createCertificateInformation);
router.get("/", getAllCertificateInformation);
router.get("/:id", getCertificateInformationById);
router.put("/:id", updateCertificateInformation);
router.delete("/:id", deleteCertificateInformation);

export default router;
