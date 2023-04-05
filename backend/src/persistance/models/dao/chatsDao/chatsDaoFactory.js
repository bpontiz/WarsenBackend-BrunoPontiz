import ChatDaoDb from "./ChatDaoDb.js";
import ChatDaoMem from "./ChatDaoMem.js";

const option = process.argv[2] || 'mongodb';

let dao;

switch (option) {
    case 'mem':
        dao = new ChatDaoMem();
        console.log(`Switching to Cart Persistance: RAM Memory`);
        break
    
    default:
        dao = new ChatDaoDb();
        console.log(`Switching to Cart Persistance: Mongo DataBase`);
        break
};

export default class CartsDaoFactory {
    static getDao() {
        return dao;
    }
}