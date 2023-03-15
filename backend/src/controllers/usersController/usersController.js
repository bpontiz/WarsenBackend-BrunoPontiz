import { getAll, addNew, getOne, deleteOne, updateOne, getAuth, authLocal } from '../../services/userService/userService.js';

const usersController = {};

usersController.getUsers = async (req, res) => {
    const getUsers = await getAll();
    res.json(getUsers);
};

usersController.authenticateLocal = async (req, res) => {
    const authenticateUser = await authLocal();
    res.json(authenticateUser);
}

usersController.authenticateUser = async (req, res) => {
    const user = req.body;
    const authenticateUser = await getAuth(user);
    authenticateUser.message ?
        res.redirect('http://localhost:3000/logged/failed') :
        res.redirect('http://localhost:3000/logged');
};

usersController.postUser = async (req, res) => {
    const user = req.body;
    const addedUser = await addNew(user);
    addedUser.message ? 
        res.redirect('http://localhost:3000/registered/failed') : 
        res.redirect('http://localhost:3000/registered/successful/');
};

usersController.getUserById = async (req, res) => {
    const id = req.params._id;
    const getUser = await getOne(id);
    res.json(getUser);
};

usersController.deleteUserById = async (req, res) => {
    const id = req.params._id;
    const deletedUser = await deleteOne(id);
    res.json(deletedUser);
};

usersController.updateUserById = async (req, res) => {
    const id = req.params._id;
    const newUser = req.body;
    const updatedUser = await updateOne(id, newUser);
    res.json(updatedUser);
};

export default usersController;