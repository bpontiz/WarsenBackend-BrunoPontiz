import { Router } from 'express';
import chatsController from '../../controllers/chatsController/chatsController.js';

const chatsRouter = Router();

chatRouter.get('/', chatsController.getChats);

export default chatsRouter;