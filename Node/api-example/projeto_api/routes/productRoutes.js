import { Router } from 'express';
import { getProductById, listProducts, updateProduct, deleteProduct, createProducts } from '../controllers/productController.js';

const router = Router();

router.get('/products', listProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProducts);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
