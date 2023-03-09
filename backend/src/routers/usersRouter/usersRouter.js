import { Router } from 'express';
import usersController from '../../controllers/usersController/usersController.js';

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.post('/', usersController.postUser);

usersRouter.get('/:id', usersController.getUserById);

usersRouter.delete('/:id', usersController.deleteUserById);

usersRouter.put('/:id', usersController.updateUserById);

export default usersRouter;