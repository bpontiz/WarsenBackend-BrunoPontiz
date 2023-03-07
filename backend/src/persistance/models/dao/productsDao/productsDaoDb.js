import CustomError from '../errors/customError.js';
import ProductsDao from './productsDao.js';
import ConfigProducts from '../../../dbconnections/mongo/products/configProducts.js';
import MongoClient from '../../../dbconnections/mongo/products/mongoDbConnection.js';

class ProductsDaoDb extends ProductsDao {
    constructor() {
        super()
        this.client = new MongoClient()
        this.client.connect()
        this.projection = ConfigProducts.db.projection
    }

};

export default ProductsDaoDb;