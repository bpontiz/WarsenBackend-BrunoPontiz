import { Router } from 'express';
import cartsController from '../../controllers/cartsController/cartsController.js';

const cartsRouter = Router();

cartsRouter.get('/', cartsController.getCarts);

cartsRouter.post('/', cartsController.postCart);

cartsRouter.get('/:_id', cartsController.getCartById);

cartsRouter.delete('/:_id', cartsController.deleteCartById);

cartsRouter.put('/:_id', cartsController.updateCartById);

export default cartsRouter;