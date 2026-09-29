import express from 'express';
import {
  createDocumentForm,
  getAllDocumentForms,
  getDocumentFormById,
  updateDocumentForm,
  deleteDocumentForm,
} from '../../controllers/forms/documentsFormsController.js';

const router = express.Router();

router.post('/', createDocumentForm);
router.get('/', getAllDocumentForms);
router.get('/:id', getDocumentFormById);
router.put('/:id', updateDocumentForm);
router.delete('/:id', deleteDocumentForm);

export default router;
