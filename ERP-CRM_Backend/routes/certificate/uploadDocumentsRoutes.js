import express from "express";
import {
  createDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
  deleteDocument,
} from "../../controllers/certificate/uploadDocumentsController.js";
import { upload } from "../../middleware/file.js"

const router = express.Router();

// Routes
router.post(
  "/create",
  upload.fields([
    { name: "AuditPlanSchedule", maxCount: 1 },
    { name: "OpeningandClosingMeetingAttendance", maxCount: 1 },
    { name: "OEMCSRPlanningMatrixIATF16949", maxCount: 1 },
    { name: "AuditorNotesIATF16949", maxCount: 1 },
    { name: "IATFDatabaseAccuracyCheckFormat", maxCount: 1 },
    { name: "AuditReport", maxCount: 1 },
    { name: "NCReport", maxCount: 1 },
  ]),
  createDocument
);

router.get("/", getAllDocuments);
router.get("/:id", getDocumentById);
router.put(
  "/update/:id",
  upload.fields([
    { name: "AuditPlanSchedule", maxCount: 1 },
    { name: "OpeningandClosingMeetingAttendance", maxCount: 1 },
    { name: "OEMCSRPlanningMatrixIATF16949", maxCount: 1 },
    { name: "AuditorNotesIATF16949", maxCount: 1 },
    { name: "IATFDatabaseAccuracyCheckFormat", maxCount: 1 },
    { name: "AuditReport", maxCount: 1 },
    { name: "NCReport", maxCount: 1 },
  ]),
  updateDocument
);
router.delete("/:id", deleteDocument);

export default router;
