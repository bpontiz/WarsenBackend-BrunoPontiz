import { Router } from 'express';
import ordersController from '../../controllers/ordersController/ordersController.js';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getOrders);

ordersRouter.post('/', ordersController.addNew);

ordersRouter.get('/:email', ordersController.getOrder);

ordersRouter.delete('/delete/:orderNumber', ordersController.deleteOrder);

export default ordersRouter;