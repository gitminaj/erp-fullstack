import express from 'express';
import {
    createInternalWitness,
    deleteInternalWitness,
    getAllInternalWitnesses,
    getInternalWitnessById,
    updateInternalWitness,
    getSingleByAaf
} from '../../controllers/forms/internalWitnessController.js';

const router = express.Router();

router.post('/', createInternalWitness);
router.put('/:id', updateInternalWitness);
router.delete('/:id', deleteInternalWitness);
router.get("/get-ByAaf/:id", getSingleByAaf);
router.get('/', getAllInternalWitnesses);
router.get('/:id', getInternalWitnessById);

export default router;