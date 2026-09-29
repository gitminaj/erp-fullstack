import express from "express";
import {
  calculateQuotation,
  getDecreasingCriteria,
  getIncreasingCriteria,
  getAuditCalculationOne,
  getAuditCalculationTwo,
  calculateAuditForEmployee,
  // calculateAuditForEmployeeExample3,
  // calculateAuditForEmployeeExample4,
  // calculateAuditForEmployeeExample5,
  calculateAuditForEmployeeExample6,
  calculateAuditForEmployeeExample7
} from "../../controllers/forms/auditCalculationController.js";
import { verifyToken } from "../../middleware/authMiddleware.js"

const router = express.Router();

router.get("/decreasing-criteria", getDecreasingCriteria);
router.get("/increasing-criteria", getIncreasingCriteria);
router.get("/one", getAuditCalculationOne);
router.get("/two", getAuditCalculationTwo);
router.post("/calculateQuotation", verifyToken, calculateQuotation);
router.post("/calculate", calculateAuditForEmployee);
// router.post("/calculate-three", calculateAuditForEmployeeExample3);
// router.post("/calculate-four", calculateAuditForEmployeeExample4);
// router.post("/calculate-five", calculateAuditForEmployeeExample5);
router.post("/calculate-six", calculateAuditForEmployeeExample6);
router.post("/calculate-seven", calculateAuditForEmployeeExample7);

export default router;
