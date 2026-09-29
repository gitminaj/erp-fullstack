import express from "express";
import {
    create, getAll, getSingle, remove, update, getSingleByAaf
} from "../../controllers/forms/noticeOfChanges.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Routes for checklist operations
router.post("/",verifyToken, create);
router.get("/", getAll);
router.get("/:id", getSingle);
router.get("/get-ByAaf/:id", getSingleByAaf);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;