import express from "express";
import {
  createContract,
  getContract,
  getSingleContract,
  updateContract,
  deleteContract,
} from "../controllers/contractController.js";

const router = express.Router();
router.post("/create", createContract);
router.get("/gets", getContract);
router.get("/get/:id", getSingleContract);
router.put("/update/:id", updateContract);
router.delete("/delete/:id", deleteContract);

export default router;
