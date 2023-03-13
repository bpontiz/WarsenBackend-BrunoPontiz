import UsersDaoDb from "./usersDaoDb.js";
import UsersDaoMem from "./usersDaoMem.js";

const option = process.argv[2] || 'mongodb';

let dao;

switch (option) {
    case 'mem':
        dao = new UsersDaoMem();
        console.log(`Switching to User Persistance: RAM Memory`);
        break
    
    default:
        dao = new UsersDaoDb();
        console.log(`Switching to User Persistance: Mongo DataBase`);
        break
};

export default class UsersDaoFactory {
    static getDao() {
        return dao;
    }
}