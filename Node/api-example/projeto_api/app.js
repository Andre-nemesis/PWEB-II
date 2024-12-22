import express from 'express';
import router from '../projeto_api/routes/categoryRoutes.js';
//import router from '../projeto_api/routes/productRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', router);

export default app;
