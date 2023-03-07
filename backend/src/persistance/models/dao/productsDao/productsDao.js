import CustomError from '../errors/customError.js';

class ProductsDao {

    async getProducts() {
        throw new CustomError(500, "No getProducts() resource has been developed.");
    };

    async saveProduct(product) {
        throw new CustomError(500, "No saveProduct() resource has been developed.");
    };

    async getproduct(id) {
        throw new CustomError(500, "No getproduct() resource has been developed.")
    };

    async deleteProduct(id) {
        throw new CustomError(500, "No deleteProduct() resource has been developed.")
    };

    async updateProduct(id) {
        throw new CustomError(500, "No updateProduct() resource has been developed.")
    };

};

export default ProductsDao;