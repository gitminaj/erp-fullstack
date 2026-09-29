import express from 'express';
import { create, destroy, getAll, getById, update,getSingleByAaf } from '../../controllers/forms/scopeofCertification.js';

const router = express.Router();

router.post('/scope-certification', create);
router.get('/scope-certification', getAll);
router.get('/scope-certification/:id', getById);
router.get("/get-ByAaf/:id", getSingleByAaf);
router.put('/scope-certification/:id', update);
router.delete('/scope-certification/:id', destroy);

export default router;