import { Int32 } from "mongodb";
import mongoose from "mongoose";
import ConfigCarts from '../../dbconnections/mongo/carts/configCartsDb.js';

const cartsSchema = new mongoose.Schema({
    email: {type: String, required: true},
    date: {type: String, required: true},
    items: {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
        image: {type: String},
        details: {type: String}
    },
    address: {type: String, required: true}
});

const cartsModel = new mongoose.model(ConfigCarts.db.collection, cartsSchema);

export default cartsModel;