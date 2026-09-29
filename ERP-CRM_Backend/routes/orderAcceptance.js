import express from "express"
import { createOrderAcceptance, deleteOrderAcceptance, getOrderAcceptance, getOrderAcceptanceById, updateOrderAcceptance } from "../controllers/orderAcceptance.js"
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router();
router.post("/createOrderAcceptance", verifyToken, createOrderAcceptance);
router.get("/getOrderAcceptance", getOrderAcceptance);
router.get("/getSingleOrderAcceptance/:id", getOrderAcceptanceById);
router.put("/updateOrderAcceptance/:id", updateOrderAcceptance);
router.delete("/deleteOrderAcceptance/:id", deleteOrderAcceptance);


export default router;