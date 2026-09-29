// routes/auditorAllocationRoutes.js
import express from 'express';
import {
  createAuditorAllocation, deleteAuditorAllocation, getAllAuditorAllocations, getAuditorAllocationById, updateAuditorAllocation, updateAuditorAllocationStatus
} from '../controllers/auditorAllocationController.js';
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router();

router.post('/create', verifyToken, createAuditorAllocation);
router.get('/', getAllAuditorAllocations);
router.get('/:id', getAuditorAllocationById);
router.put('/update/:id', verifyToken, updateAuditorAllocation);
router.delete('/delete/:id', deleteAuditorAllocation);
router.put('/status/:id', verifyToken, updateAuditorAllocationStatus);

export default router;
