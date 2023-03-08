import ConfigProducts from '../../../dbconnections/mongo/products/configProductsDb.js';
import MongoClient from '../../../dbconnections/mongo/products/mongoDbConnection.js';
import productModel from '../../mongo/productsMongoModel.js';

class ProductsDaoDb {
    constructor() {
        this.client = new MongoClient()
        this.client.connect()
        this.projection = ConfigProducts.db.projection
    }

    async getProducts() {
        try {
            const searched = await productModel.find({}, this.projection).lean();
            return searched;
        }

        catch (err) {
            console.log('ERR! Could not get products.', err);
        }
    };

    async getProduct(id) {
        let searched;

        try {
            searched = await productModel.findOne({ idInventary: id }, this.projection);
        }

        catch (err) {
            console.log('ERR! Could not get product.', err);
        }

        if (!searched) {
            console.log(`ERR! Product with id = ${id} does not exist.`);
        };

        return [searched];
    };

    async saveProduct(product) {
        try {
            return await productModel.create(product);
        }

        catch (err) {
            console.log('ERR! Could not add new product.', err);
        }
    };

    async deleteProduct(id) {
        let deleted;
        try {
            deleted = await productModel.deleteOne({ idInventary: id });
        }

        catch (err) {
            console.log('ERR! Could not delete product.', err);
        }

        if (!deleted.deletedCount == 0) {
            console.log(`ERR! Could not find product with id = ${id}`);
        }
    };

    async updateProduct(id, newProduct) {
        let result;

        try {
            result = await productos.findOneAndReplace({ idInventary: id }, newProduct, this.projection);
        }

        catch (err) {
            console.log(`ERR! Could not update product.`, err);
        }

        if (!result) {
            console.log(`ERR! Could not find product with id = ${id}`, { id });
        }

        return newProduct;
    };

    exit() {
        this.client.disconnect()
    };

};

export default ProductsDaoDb;