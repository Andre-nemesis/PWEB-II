import { Router } from 'express';
import { listCategories,createCategory, deleteCategory, getCategoryById, updateCategory } from '../controllers/categoryController.js';

const router = Router();

router.get('/category', listCategories);
router.get('/category/:id', getCategoryById); 
router.post('/category', createCategory); 
router.put('/category/:id', updateCategory); 
router.delete('/category/:id', deleteCategory); 

export default router;
