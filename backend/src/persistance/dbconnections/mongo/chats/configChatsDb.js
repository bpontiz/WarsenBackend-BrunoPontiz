import * as dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME || 'test1';

const connectionString = process.env.DB_URL || 'mongodb://localhost:27017/';

const ConfigChatsDb = {
    db: {
        name: dbName,
        collection: 'chat',
        cnxStr: connectionString,
        //projection: {_id:0, __v:0}
        projection: {__v:0}
    }
};

export default ConfigChatsDb;