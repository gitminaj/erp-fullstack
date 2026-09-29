import express from "express";
import {
    createNewDraf,
    getAllNewDrafs,
    getNewDrafById,
    updateNewDraf,
    deleteNewDraf,
} from "../../controllers/certificate/newDrafController.js";
import { verifyToken } from "../../middleware/authMiddleware.js"

const router = express.Router();

router.post("/", verifyToken, createNewDraf);
router.get("/", getAllNewDrafs);
router.get("/:id", getNewDrafById);
router.put("/:id", updateNewDraf);
router.delete("/:id", deleteNewDraf);

export default router;
