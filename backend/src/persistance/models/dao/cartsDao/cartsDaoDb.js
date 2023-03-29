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
            const reverseSearched = searched.slice().reverse();
            return reverseSearched;
        }

        catch(err) {
            console.log('ERR! Could not get carts.', err);
        }
    };

    async getCart(id) {
        let searched;

        try {
            searched = await cartsModel.findOne({ _id: id }, this.projection);
        }

        catch(err) {
            console.log(`ERR! Could not get cart.`, err);
        }

        if(!searched) {
            console.log(`ERR! Could not get cart with id = ${id}.`, err);
        }
    };

    async saveCart(cart) {
        try {
            await cartsModel.create(cart);
            console.log(`New cart from ${cart.email} successfully added.`);
            return cart;
        }

        catch(err) {
            console.log('ERR! Could not add new cart.', err);
        }
    };

    async deleteCart(id) {
        let deleted;
        let searched;

        try {
            searched = await cartsModel.findOne({ _id: id }, this.projection);
            deleted = await cartsModel.deleteOne({ _id: id });
            deleted.deletedCount != 0 ?
                console.log(`Cart with id = ${id} successfully deleted.`) :
                null;
        }

        catch (err) {
            console.log('ERR! Could not delete cart.', err);
        };

        if (!searched) {
            console.log(`ERR! Could not find cart with id = ${id}`);
        };

        return searched;
    };

    async updateCart(id, newCart) {
        let result;

        try {
            result = await cartsModel.findOneAndReplace({ _id: id }, newCart);
        }

        catch(err) {
            console.log('ERR! Could not update cart.', err);
        }

        if (!result) {
            console.log(`ERR! Could not find cart with id = ${id}`, { id });
        }

        else {
            console.log(`Cart with id = ${id} successfully updated.`);
        };

        return newCart;
    };

};

export default CartsDaoDb;