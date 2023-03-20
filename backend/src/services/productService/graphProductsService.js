import GraphProductDao from "../../persistance/models/dao/productsDao/graphProductsDao.js";
import GraphProduct from "../../persistance/models/dto/graphProductDto/graphProductDto.js";
import crypto from "crypto";

export default class GraphProductsService {
    constructor() {
        this.productDao = new GraphProductDao();
    }

    getProducts = () => {
        return this.productDao.getProducts();
    };

    createProduct = ({ data }) => {
        const id = crypto.randomBytes(10).toString("hex");
        const newProduct = new GraphProduct(id, data);

        this.productDao.saveProduct(newProduct);
        return newProduct;
    };

    markAvailabilityProduct = ({ id }) => {
        const updatedProduct = this.productDao.updateProduct(id, { availability: true });
        return updatedProduct;
    };

    deleteNoAvailableProducts = () => {
        const deletedProducts = this.productDao.deleteProductWhere("availability", true);
        return deletedProducts;
    };

};