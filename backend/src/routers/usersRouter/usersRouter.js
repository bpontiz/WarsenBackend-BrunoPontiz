import { Router } from 'express';
import usersController from '../../controllers/usersController/usersController.js';

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.post('/', usersController.postUser);

usersRouter.post('/password', usersController.authenticateUser);

usersRouter.get('/:_id', usersController.getUserById);

usersRouter.delete('/:_id', usersController.deleteUserById);

usersRouter.put('/:_id', usersController.updateUserById);

export default usersRouter;