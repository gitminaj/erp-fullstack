import express from "express";
import {
  create,
  deleteIATFDocument,
  get,
  getSingle,
  updateIATFDocument
} from "../../controllers/forms/IATFdocumentReview.js";

const router = express.Router();

// Routes
router.post("/create", create);
router.get("/get", get);
router.get("/get-single/:id", getSingle);
router.put("/update/:id", updateIATFDocument);
router.delete("/delete/:id", deleteIATFDocument);

export default router;
