import { Router } from 'express';
import productsController from '../../controllers/productsController/productsController.js';

const productsRouter = Router();

productsRouter.get('/', productsController.getData);

productsRouter.post('/', productsController.postData);

export default productsRouter;