import { Router } from 'express';
import cartsController from '../../controllers/cartsController/cartsController.js';

const cartsRouter = Router();

cartsRouter.get('/', cartsController.getCarts);

cartsRouter.post('/', cartsController.postCart);

export default cartsRouter;