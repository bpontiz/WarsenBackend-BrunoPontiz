import CartsDaoDb from "./cartsDaoDb.js";
import CartsDaoMem from "./cartsDaoMem.js";

const option = process.argv[2] || 'mongodb';

let dao;

switch (option) {
    case 'mem':
        dao = new CartsDaoMem();
        console.log(`Switching to Cart Persistance: RAM Memory`);
        break
    
    default:
        dao = new CartsDaoDb();
        console.log(`Switching to Cart Persistance: Mongo DataBase`);
        break
};

export default class CartsDaoFactory {
    static getDao() {
        return dao;
    }
}