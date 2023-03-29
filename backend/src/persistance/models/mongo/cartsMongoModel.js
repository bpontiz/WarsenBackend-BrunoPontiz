import mongoose from "mongoose";
import ConfigCarts from '../../dbconnections/mongo/carts/configCartsDb.js';

const cartsSchema = new mongoose.Schema({
    email: {type: String, required: true},
    date: {type: Date, required: true},
    items: {type: Array, required: true},
    address: {type: String, required: true}
});

const cartsModel = new mongoose.model(ConfigCarts.db.collection, cartsSchema);

export default cartsModel;