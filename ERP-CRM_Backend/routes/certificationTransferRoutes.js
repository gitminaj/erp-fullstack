// routes/certificationTransferRoutes.js
import express from "express";
import {
  createCertificationTransfer,
  getAllCertificationTransfers,
  getCertificationTransferById,
  updateCertificationTransfer,
  deleteCertificationTransfer,
} from "../controllers/certificationTransferController.js";

const router = express.Router();

router.post("/", createCertificationTransfer);
router.get("/", getAllCertificationTransfers);
router.get("/:id", getCertificationTransferById);
router.put("/:id", updateCertificationTransfer);
router.delete("/:id", deleteCertificationTransfer);

export default router;
