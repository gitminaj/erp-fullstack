import express from "express";
import {
    createAuditorEnhancement,
    getAllAuditorEnhancements,
    getAuditorEnhancementById,
    updateAuditorEnhancement,
    deleteAuditorEnhancement,
    updateStatusByAccreditationController,
    updateStatusByAccreditationHead
} from "../controllers/auditorEnhancementController.js";
import { verifyToken } from "../middleware/authMiddleware.js"
import { upload } from "../middleware/file.js";

const router = express.Router();

router.post("/create", verifyToken, upload.fields([{ name: "browseFileType", maxCount: 10 },]), createAuditorEnhancement);
router.get("/get", getAllAuditorEnhancements);
router.get("/getSingle/:id", getAuditorEnhancementById);
router.put("/update/:id", verifyToken, updateAuditorEnhancement);
router.put("/update-status/controller/:id", verifyToken, updateStatusByAccreditationController);
router.put("/update-status/head/:id", verifyToken, updateStatusByAccreditationHead);
router.delete("/delete/:id", verifyToken, deleteAuditorEnhancement);

export default router;
