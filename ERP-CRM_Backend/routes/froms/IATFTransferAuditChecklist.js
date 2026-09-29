import express from "express";
import {
    createChecklist,
    getAllChecklists,
    getChecklistById,
    updateChecklist,
    deleteChecklist,
    getSingleByAaf
} from "../../controllers/forms/IATFTransferAuditChecklist.js";

const router = express.Router();

// Routes for checklist operations
router.post("/", createChecklist);
router.get("/", getAllChecklists);
router.get("/get-ByAaf/:id", getSingleByAaf);
router.get("/:id", getChecklistById);
router.put("/:id", updateChecklist);
router.delete("/:id", deleteChecklist);

export default router;
