import ConfigCartsDb from "../../../dbconnections/mongo/carts/configCartsDb.js";
import MongoClient from "../../../dbconnections/mongo/carts/mongoDbConnection.js";
import cartsModel from "../../mongo/cartsMongoModel.js";

class CartsDaoDb {
    constructor() {
        this.client = new MongoClient()
        this.client.connect()
        this.projection = ConfigCartsDb.db.projection
    }

    async getCarts() {
        try {
            const searched = await cartsModel.find({}, this.projection).lean();
            return searched;
        }

        catch(err) {
            console.log('ERR! Could not get carts.', err);
        }
    };

};

export default CartsDaoDb;