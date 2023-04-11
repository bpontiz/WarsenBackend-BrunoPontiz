import ConfigChatsDb from "../../../dbconnections/mongo/chats/configChatsDb.js";
import MongoClient from "../../../dbconnections/mongo/chats/mongoDbConnection.js";
import chatsModel from "../../mongo/chatsMongoModel.js";
import userModel from "../../mongo/usersMongoModel.js";
import io from '../../../../server.js';

class ChatDaoDb {
    constructor() {
        this.client = new MongoClient()
        this.client.connect()
        this.projection = ConfigChatsDb.db.projection
    }

    #stablishConnection(io, chat) {
        return io.on('connection', socket => {
            console.log('New client is online.');

            socket.emit('messages', chat);

            socket.on('new-message', data => {
                chat.create(data);
                socket.emit('messages', chat);
            })
        });
    }

    async saveMessage(message) {
        let time = new Date().toLocaleString();

        const userType = process.argv[3] || 'user';

        try {
            const getUser = await userModel.findOne({username: message.username}, this.projection);
            const newMessage = { ...message, date: time, type: userType, email: getUser.email};
            await chatsModel.create(newMessage);
            console.log(`New message from ${newMessage.username} successfully saved.`);
            this.#stablishConnection(io, newMessage.body)
            return newMessage;
        }

        catch(err) {
            console.log('ERR! Could not save new message.', err);
        }
    };

    async getChat(username) {
        let searched;

        let filterSearched = [];

        try {
            searched = await chatsModel.find({}, this.projection);

            for(let i of searched) {
                if(i.username === username) {
                    filterSearched.push(i);
                }
            };

            if( filterSearched.length === 0 ) {
                console.log(`Chat is empty.`);
                return {};
            }
            
            else {
                this.#stablishConnection(io, filterSearched.body);
                return filterSearched;
            }
        }

        catch(err) {
            console.log('ERR! Could not get message by user.', err);
        }
    }

};

export default ChatDaoDb;