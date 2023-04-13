import { Router } from 'express';
import productsController from '../../controllers/productsController/productsController.js';
import GraphQLController from '../../controllers/productsController/graphProductsController.js';

const productsRouter = Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/category/:category', productsController.getProductsByCategory);

productsRouter.post('/', productsController.postProduct);

productsRouter.get('/:_id', productsController.getProductById);

productsRouter.delete('/:_id', productsController.deleteProductById);

productsRouter.put('/:_id', productsController.updateProductById)

productsRouter.get('/graphql/queries', new GraphQLController());

export default productsRouter;