import { Router } from 'express';
import { listCategories,createCategory, deleteCategory, getCategoryById, updateCategory } from '../controllers/categoryController.js';

const router = Router();

router.get('/categoria', listCategories);
router.get('/categoria/:id', getCategoryById);
router.post('/categoria', createCategory);
router.put('/categoria/:id', updateCategory);
router.delete('/categoria/:id', deleteCategory);

export default router;
