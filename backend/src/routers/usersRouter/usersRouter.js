import { Router } from 'express';
import usersController from '../../controllers/usersController/usersController.js';

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/auth/login', usersController.authenticateLocal);

usersRouter.post('/auth/login', usersController.authenticateUser);

usersRouter.post('/', usersController.postUser);

usersRouter.get('/:_id', usersController.getUserById);

usersRouter.delete('/:_id', usersController.deleteUserById);

usersRouter.put('/:_id', usersController.updateUserById);

export default usersRouter;