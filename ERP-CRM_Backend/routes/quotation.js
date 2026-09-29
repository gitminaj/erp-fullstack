import express from "express";
import {
  createQuotation,
  getAllQuotations,
  getQuotationById,
  getContractReviewData,
  updateQuotation,
  deleteQuotation,
  getCurrency,
} from "../controllers/quotationController.js";
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/create", verifyToken, createQuotation);
router.get("/get", getAllQuotations);
router.get("/get-contract-review/:leadId/:bdId", getContractReviewData);
router.get("/currency", getCurrency);
router.get("/single/:id", getQuotationById);
router.put("/quotations/:id", updateQuotation);
router.delete("/quotations/:id", deleteQuotation);

export default router;
