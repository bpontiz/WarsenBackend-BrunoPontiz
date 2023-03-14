import UsersDaoFactory from "../../persistance/models/dao/usersDao/usersDaoFactory.js";

const usersDaoFactory = UsersDaoFactory.getDao();

export async function getAll() {
    return await usersDaoFactory.getUsers();
};

export async function addNew(user) {
    return await usersDaoFactory.saveUser(user);
};

export async function getOne(id) {
    return await usersDaoFactory.getUser(id);
};

export async function deleteOne(id) {
    return await usersDaoFactory.deleteUser(id);
};

export async function updateOne(id, newUser) {
    return await usersDaoFactory.updateUser(id, newUser);
};