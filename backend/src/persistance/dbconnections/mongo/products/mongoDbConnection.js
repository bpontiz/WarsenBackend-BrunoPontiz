import DbClient from './mongoDbClient.js';
import ConfigProducts from './configProductsDb.js';
import mongoose from 'mongoose';
import CustomError from '../../../models/dao/errors/customError.js';

class MongoClient extends DbClient {
    constructor() {
        super()
        this.connected = false
        this.client = mongoose
    }

    async connect() {
        try {
            await this.client.connect(ConfigProducts.db.cnxStr + ConfigProducts.db.name, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
            console.log('Database has been successfully connected.');
            this.connected = true;

        } catch (error) {
            throw new CustomError(500, 'MONGO CONNECTION ERR!: ', error);
        }
    };

    async disconnect() {
        try {
            await this.client.connection.close();
            console.log('Database has been disconnected.');
            this.connected = false;

        } catch (error) {
            throw new CustomError(500, 'MONGO CONNECTION ERR!: ', error);
        }
    }

};

export default MongoClient;