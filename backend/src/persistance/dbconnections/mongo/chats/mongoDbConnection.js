import DbClient from './mongoDbClient.js';
import ConfigChatsDb from './configChatsDb.js';
import mongoose from 'mongoose';

class MongoClient extends DbClient {
    constructor() {
        super()
        this.connected = false
        this.client = mongoose
    }

    async connect() {
        try {
            await this.client.connect(ConfigChatsDb.db.cnxStr + ConfigChatsDb.db.name, {
                useNewUrlParser: true,
            });
            console.log(`Database collection ${ConfigChatsDb.db.collection} has been successfully connected.`);
            this.connected = true;

        } catch (error) {
            console.log('MONGO CONNECTION ERR!: ', error);
        }
    };

    async disconnect() {
        try {
            await this.client.connection.close();
            console.log('Database has been disconnected.');
            this.connected = false;

        } catch (error) {
            console.log('MONGO CONNECTION ERR!: ', error);
        }
    }

};

export default MongoClient;