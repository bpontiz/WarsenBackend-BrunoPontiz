import mongoose from "mongoose";
import ConfigOrdersDb from '../../dbconnections/mongo/orders/configOrdersDb.js';

const ordersSchema = new mongoose.Schema({
    items: {
        description: {type: Array, required: true}
    },
    email: {type: String, required: true},
    date: {type: String, required: true},
    status: {type: String, default: 'generated'},
    orderNumber: {type: Number, required: true}
});

const ordersModel = new mongoose.model(ConfigOrdersDb.db.collection, ordersSchema);

export default ordersModel;