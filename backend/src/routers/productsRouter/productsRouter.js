import { Router } from 'express';
import productsController from '../../controllers/productsController/productsController.js';

const productsRouter = Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.post('/', productsController.postProduct);

productsRouter.get('/:id', productsController.getProductById);

productsRouter.delete('/:id', productsController.deleteProductById);

productsRouter.put('/:id', productsController.updateProductById)

export default productsRouter;