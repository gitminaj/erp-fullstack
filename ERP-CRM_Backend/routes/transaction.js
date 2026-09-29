import express from "express";
import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getInvoice,
  getPo,
} from "../controllers/transactionController.js";
import { upload } from "../middleware/file.js";

const router = express.Router();

// Define routes
router.post(
  "/",
  upload.fields([
    { name: "poUpload", maxCount: 1 },
    { name: "invoiceUpload", maxCount: 1 },
  ]),
  createTransaction
);
router.get("/invoice", getInvoice);
router.get("/po", getPo);
router.get("/", getAllTransactions);
router.get("/:id", getTransactionById);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
