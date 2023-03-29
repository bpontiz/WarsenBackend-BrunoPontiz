import userModel from "../../mongo/usersMongoModel.js";
import ConfigUsers from "../../../dbconnections/mongo/users/configUsersDb.js";
import MongoClient from "../../../dbconnections/mongo/users/mongoDbConnection.js";

let userAuthenticator = {};
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
            searched = await userModel.findOne({ _id: id }, this.projection);
        }

        catch (err) {
            console.log('ERR! Could not get user.', err);
        }

        if (!searched) {
            console.log(`ERR! User with id = ${id} does not exist.`);
            return [searched];
        };

        return searched;
    };

    async authLocal() {
        try {
            return userAuthenticator.found;
        }

        catch (err) {
            console.log('ERR! Could not authenticate user login', err);
        }
    };

    async authLogin(user) {
        let searched;

        let isMatch;

        try {
            searched = await userModel.findOne({ username: user.username }, this.projection);

            searched ?
                isMatch = await searched.matchPassword(user.password) :
                isMatch = false;

            if (searched && isMatch) {
                userAuthenticator.found = searched;
                return searched;
            };

            if (!searched) {
                const noUser = {
                    message: "User does not exist.",
                    searched
                };
    
                console.log(noUser.message);
    
                return noUser;
            };

            if (!isMatch) {
                const noMatch = {
                    message: "Incorrect password.",
                    searched
                };
    
                console.log(noMatch.message);
    
                return noMatch;
            };
        }

        catch (err) {
            console.log('ERR! Could not authenticate user login', err);
        }
    };

    async saveUser(user) {
        try {
            const searched = await userModel.findOne({ email: user.email }, this.projection);

            if (!searched) {
                let newUser = new userModel({...user});
                newUser.password = await newUser.encryptPassword(user.password);
                newUser.passwordRepeated = await newUser.encryptPassword(user.passwordRepeated);
                console.log(newUser);
                return await userModel.create(newUser);
            };

            const userRegistered = {
                message: "User already registered",
                searched
            };

            console.log(userRegistered.message);

            return userRegistered;
        }

        catch (err) {
            console.log('ERR! Could not add new user.', err);
        }
    };

    async deleteUser(id) {
        let deleted;
        let searched;

        try {
            searched = await userModel.findOne({ _id: id }, this.projection);
            deleted = await userModel.deleteOne({ _id: id });
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
            result = await userModel.findOneAndReplace({ _id: id }, newUser);
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