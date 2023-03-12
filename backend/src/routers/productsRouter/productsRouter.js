import { Router } from 'express';
import productsController from '../../controllers/productsController/productsController.js';

const productsRouter = Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.post('/', productsController.postProduct);

productsRouter.get('/:_id', productsController.getProductById);

productsRouter.delete('/:_id', productsController.deleteProductById);

productsRouter.put('/:_id', productsController.updateProductById)

export default productsRouter;