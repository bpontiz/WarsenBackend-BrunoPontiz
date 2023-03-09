import UsersDaoDb from '../../persistance/models/dao/usersDao/usersDaoDb.js';

const usersDaoDb = new UsersDaoDb();

export async function getAll() {
    return await usersDaoDb.getUsers();
};

export async function addNew(user) {
    return await usersDaoDb.saveUser(user);
};

export async function getOne(id) {
    return await usersDaoDb.getUser(id);
};

export async function deleteOne(id) {
    return await usersDaoDb.deleteUser(id);
};

export async function updateOne(id, newUser) {
    return await usersDaoDb.updateUser(id, newUser);
};