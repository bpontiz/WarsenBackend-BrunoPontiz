import CustomError from '../errors/customError.js';
import ProductsDao from './productsDao.js';
import ConfigProducts from '../../../dbconnections/mongo/products/configProducts.js';
import MongoClient from '../../../dbconnections/mongo/products/mongoDbConnection.js';
import productModel from '../../mongo/productsMongoModel.js';

class ProductsDaoDb extends ProductsDao {
    constructor() {
        super()
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
            throw new CustomError(500, 'ERR! Could not get products.', err)
        }
    };

    async getProduct(id) {
        let searched;

        try {
            searched = await productModel.findOne({ idInventary: id }, this.projection);
        }

        catch (err) {
            throw new CustomError(500, 'ERR! Could not get product.', err);
        }

        if (!searched) {
            throw new CustomError(404, `ERR! Could not get product with id = ${id}`, err);
        };

        return [searched];
    };

    async saveProduct(product) {
        try {
            return await productModel.create(product);
        }

        catch (err) {
            throw new CustomError(500, 'ERR! Could not add new product.', err);
        }
    };

    async deleteProduct(id) {
        let deleted;
        try {
            deleted = await productModel.deleteOne({ idInventary: id });
        }

        catch (err) {
            throw new CustomError(500, 'ERR! Could not delete product.', err);
        }

        if (!deleted.deletedCount == 0) {
            throw new CustomError(500, `ERR! Could not find product with id = ${id}`, err);
        }
    };

    async updateProduct(id, newProduct) {
        let result;

        try {
            result = await productos.findOneAndReplace({ idInventary: id }, newProduct, this.projection);
        }

        catch (err) {
            throw new CustomError(500, `ERR! Could not update product.`, err);
        }

        if (!result) {
            throw new CustomError(404, `ERR! Could not find product with id = ${id}`, { id });
        }

        return newProduct;
    };

    exit() {
        this.client.disconnect()
    };

};

export default ProductsDaoDb;