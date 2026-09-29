import express from "express";
import {
  getDummyPrice,
  createCertificationForm,
  getCertificationForms,
  getCertificationFormById,
  updateCertificationForm,
  deleteCertificationForm,
  calculateTotals,
} from "../../controllers/forms/documentFormIATF.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.post("/create", verifyToken, createCertificationForm);
router.post("/calculate-totals", calculateTotals);
router.get("/get", getCertificationForms);
router.get("/get-single/:id", getCertificationFormById);
router.put("/update/:id", updateCertificationForm);
router.delete("/delete/:id", deleteCertificationForm);
router.get("/dummy-price", getDummyPrice);

export default router;
