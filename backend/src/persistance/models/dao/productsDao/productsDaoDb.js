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

        return searched;
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
        let searched;

        try {
            searched = await productModel.findOne({ idInventary: id }, this.projection);
            deleted = await productModel.deleteOne({ idInventary: id });
            deleted.deletedCount != 0 ?
                console.log(`Product with id = ${id} successfully deleted.`) :
                null;
        }

        catch (err) {
            console.log('ERR! Could not delete product.', err);
        }

        if (!searched) {
            console.log(`ERR! Could not find product with id = ${id}`);
        }

        return searched;
    };

    async updateProduct(id, newProduct) {
        let result;

        try {
            result = await productModel.findOneAndReplace({ idInventary: id }, newProduct);
        }

        catch (err) {
            console.log(`ERR! Could not update product.`, err);
        }

        if (!result) {
            console.log(`ERR! Could not find product with id = ${id}`, { id });
        }

        else {
            console.log(`Product with id = ${id} successfully updated.`);
        }

        return newProduct;
    };

    exit() {
        this.client.disconnect()
    };

};

export default ProductsDaoDb;