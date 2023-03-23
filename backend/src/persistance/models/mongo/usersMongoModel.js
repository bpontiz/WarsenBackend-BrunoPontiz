import mongoose from 'mongoose';
import ConfigUsers from '../../dbconnections/mongo/users/configUsersDb.js';
import bcrypt from 'bcrypt';

const usersSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true}
});

usersSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

usersSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const userModel = new mongoose.model(ConfigUsers.db.collection, usersSchema);

export default userModel;