import userModel from "../../mongo/usersMongoModel.js";
import ConfigUsers from "../../../dbconnections/mongo/users/configUsersDb.js";
import MongoClient from "../../../dbconnections/mongo/users/mongoDbConnection.js";


class UsersDaoDb {
    constructor() {
        this.client = new MongoClient()
        this.client.connect()
        this.projection = ConfigUsers.db.projection
    }

    async getUsers() {
        try {
            const searched = await userModel.find({}, this.projection).lean();
            return searched;
        }

        catch(err) {
            console.log('ERR! Could not get users.', err);
        }
    };

    async getUser(id) {
        let searched;

        try {
            searched = await userModel.findOne({ idUser: id }, this.projection);
        }

        catch (err) {
            console.log('ERR! Could not get user.', err);
        }

        if (!searched) {
            console.log(`ERR! User with id = ${id} does not exist.`);
        };

        return searched;
    };

    async saveUser(user) {
        try {
            return await userModel.create(user);
        }

        catch (err) {
            console.log('ERR! Could not add new user.', err);
        }
    };

    async deleteUser(id) {
        let deleted;
        let searched;

        try {
            searched = await userModel.findOne({ idUser: id }, this.projection);
            deleted = await userModel.deleteOne({ idUser: id });
            deleted.deletedCount != 0 ?
                console.log(`User with id = ${id} successfully deleted.`) :
                null;
        }

        catch (err) {
            console.log('ERR! Could not delete user.', err);
        }

        if (!searched) {
            console.log(`ERR! Could not find user with id = ${id}`);
        }

        return searched;
    };

    async updateUser(id, newUser) {
        let result;

        try {
            result = await userModel.findOneAndReplace({ idUser: id }, newUser);
        }

        catch (err) {
            console.log(`ERR! Could not update user.`, err);
        }

        if (!result) {
            console.log(`ERR! Could not find user with id = ${id}`, { id });
        }

        else {
            console.log(`User with id = ${id} successfully updated.`);
        }

        return newUser;
    }

};

export default UsersDaoDb;