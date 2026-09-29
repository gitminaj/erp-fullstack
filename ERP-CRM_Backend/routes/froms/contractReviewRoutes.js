import express from "express";
import {
  createContractReview,
  getAllContractReviews,
  getContractReviewById,
  updateContractReview,
  getContractReviewByCustomerId,
  deleteContractReview,
} from "../../controllers/forms/contractReviewController.js";
import { verifyToken } from "../../middleware/authMiddleware.js"

const router = express.Router();

router.post("/contract-reviews", verifyToken, createContractReview);
router.get("/contract-reviews", getAllContractReviews);
router.get("/contract-reviews-customer/:customerId", getContractReviewByCustomerId);
router.get("/contract-reviews/:id", getContractReviewById);
router.put("/contract-reviews/:id", updateContractReview);
router.delete("/contract-reviews/:id", deleteContractReview);

export default router;
