import DbClient from './mongoDbClient.js';
import ConfigOrdersDb from './configOrdersDb.js';
import mongoose from 'mongoose';

class MongoClient extends DbClient {
    constructor() {
        super()
        this.connected = false
        this.client = mongoose
    }

    async connect() {
        try {
            await this.client.connect(ConfigOrdersDb.db.cnxStr + ConfigOrdersDb.db.name, {
                useNewUrlParser: true,
            });
            console.log(`Database collection ${ConfigOrdersDb.db.collection} has been successfully connected.`);
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