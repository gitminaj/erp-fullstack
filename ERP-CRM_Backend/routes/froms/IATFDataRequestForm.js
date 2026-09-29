import express from "express";
import {
  create,
  deleteIATFDocument,
  get,
  getSingle,
  updateIATFDocument
} from "../../controllers/forms/IATFDataRequestForm.js";
import { verifyToken } from "../../middleware/authMiddleware.js"

const router = express.Router();

// Routes
router.post("/create", verifyToken, create);
router.get("/get", get);
router.get("/get-single/:id", getSingle);
router.put("/update/:id", updateIATFDocument);
router.delete("/delete/:id", deleteIATFDocument);

export default router;
