import { Router } from 'express';
import chatsController from '../../controllers/chatsController/chatsController.js';

const chatsRouter = Router();

chatsRouter.get('/:username', chatsController.getChat);

chatsRouter.post('/', chatsController.postChat);

export default chatsRouter;