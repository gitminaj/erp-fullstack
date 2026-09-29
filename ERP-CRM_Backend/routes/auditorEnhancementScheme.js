import express from "express";
import {
    createAuditorEnhancementScheme,
    getAllAuditorEnhancementSchemes,
    getAuditorEnhancementSchemeById,
    updateAuditorEnhancementScheme,
    deleteAuditorEnhancementScheme,
} from "../controllers/auditorEnhancementSchemeController.js";
import { upload } from "../middleware/file.js";
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/create", verifyToken, upload.fields([{ name: "browseFileType", maxCount: 10 },]), createAuditorEnhancementScheme);
router.get("/", getAllAuditorEnhancementSchemes);
router.get("/:id", getAuditorEnhancementSchemeById);
router.put("/:id", updateAuditorEnhancementScheme);
router.delete("/:id", deleteAuditorEnhancementScheme);

export default router;
