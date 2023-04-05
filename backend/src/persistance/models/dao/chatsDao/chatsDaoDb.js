import ConfigChatsDb from "../../../dbconnections/mongo/chats/configChatsDb.js";
import MongoClient from "../../../dbconnections/mongo/chats/mongoDbConnection.js";
import chatsModel from "../../mongo/chatsMongoModel.js";

class ChatDaoDb {
    constructor() {
        this.client = new MongoClient()
        this.client.connect()
        this.projection = ConfigChatsDb.db.projection
    }

    async getChats() {
        try {
            const searched = await chatsModel.find({}, this.projection).lean();
            return searched;
        }

        catch(err) {
            console.log('ERR! Could not get chats.', err);
        }
    };

    async saveMessage(message) {
        let time = new Date().toLocaleString();

        try {
            const newCart = { ...cart, date: time};
            await chatsModel.create(newCart);
            console.log(`New cart from ${newCart.email} successfully added.`);
            return newCart;
        }

        catch(err) {
            console.log('ERR! Could not add new cart.', err);
        }
    };

    async getChat(email) {
        let searched;

        let filterSearched = [];

        try {
            searched = await chatsModel.find({}, this.projection);

            for(let i of searched) {
                if(i.email === email) {
                    filterSearched.push(i);
                }
            };

            // const filterSearched = searched.filter( user => user.email === email);

            if( filterSearched.length === 0 ) {
                console.log(`Cart is empty.`);
            }
            
            else {
                return filterSearched;
            }
        }

        catch(err) {
            console.log('ERR! Could not get cart by user email.', err);
        }
    }

    async deleteCart(id) {
        let deleted;
        let searched;

        try {
            searched = await chatsModel.findOne({ _id: id }, this.projection);
            deleted = await chatsModel.deleteOne({ _id: id });
            deleted.deletedCount != 0 ?
                console.log(`Cart with id = ${id} successfully deleted.`) :
                null;
        }

        catch (err) {
            console.log('ERR! Could not delete cart.', err);
        };

        if (!searched) {
            console.log(`ERR! Could not find cart with id = ${id}`);
        };

        return searched;
    };

};

export default ChatDaoDb;