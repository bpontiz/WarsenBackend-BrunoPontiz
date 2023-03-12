import { getAll, addNew, getOne, deleteOne, updateOne } from '../../services/userService/userService.js';

const usersController = {};

usersController.getUsers = async (req, res) => {
    const getUsers = await getAll();
    res.json(getUsers);
};

usersController.postUser = async (req, res) => {
    const user = req.body;
    await addNew(user);
    res.redirect('http://localhost:3000/');
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