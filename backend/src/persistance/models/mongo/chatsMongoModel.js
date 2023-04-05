import mongoose from "mongoose";
import ConfigChats from '../../dbconnections/mongo/chats/configChatsDb.js';

const chatsSchema = new mongoose.Schema({
    email: {type: String, required: true},
    date: {type: String, required: true},
    type: {type: String, required: true},
    body: {type: String, required: true}
});

const chatsModel = new mongoose.model(ConfigChats.db.collection, chatsSchema);

export default chatsModel;