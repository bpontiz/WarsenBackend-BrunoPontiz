import mongoose from 'mongoose';
import ConfigUsers from '../../dbconnections/mongo/users/configUsersDb.js';

const usersSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true}
});

const userModel = new mongoose.model(ConfigUsers.db.collection, usersSchema);

export default userModel;