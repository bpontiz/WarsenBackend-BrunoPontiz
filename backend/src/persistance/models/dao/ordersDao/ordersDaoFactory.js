import OrdersDaoDb from "./ordersDaoDb.js";
import OrdersDaoMem from "./ordersDaoMem.js";

const option = process.argv[2] || 'mongodb';

let dao;

switch (option) {
    case 'mem':
        dao = new OrdersDaoMem();
        console.log(`Switching to Orders Persistance: RAM Memory`);
        break
    
    default:
        dao = new OrdersDaoDb();
        console.log(`Switching to Orders Persistance: Mongo DataBase`);
        break
};

export default class OrdersDaoFactory {
    static getDao() {
        return dao;
    }
}