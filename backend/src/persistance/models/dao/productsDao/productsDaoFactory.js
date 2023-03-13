import ProductsDaoDb from "./productsDaoDb.js";
import ProductsDaoMem from "./productsDaoMem.js";

const option = process.argv[2] || 'mongodb';

let dao;

switch (option) {
    case 'mem':
        dao = new ProductsDaoMem();
        console.log(`Switching to Product Persistance: RAM Memory`);
        break
    
    default:
        dao = new ProductsDaoDb();
        console.log(`Switching to Product Persistance: Mongo DataBase`);
        break
};

export default class ProductsDaoFactory {
    static getDao() {
        return dao;
    }
}