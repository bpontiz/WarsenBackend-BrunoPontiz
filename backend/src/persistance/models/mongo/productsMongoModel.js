import mongoose from 'mongoose';
import ConfigProducts from '../../dbconnections/mongo/products/configProductsDb.js';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
});

const productModel = new mongoose.model(ConfigProducts.db.collection, productSchema);

export default productModel;