export default class GraphProductDao {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    };

    saveProduct(product) {
        this.products.push(product);
    };

    updateProduct(id, inputs) {
        console.log(id);
        const index = this.products.findIndex(r => r.id === id);
        if (index === -1) {
            throw new Error("Product searched does not exist.");
        }

        const updatedProduct = { ...this.products[index], ...inputs };
        this.products[index] = updatedProduct;
        console.log(updatedProduct);
        return updatedProduct;
    };

    deleteProductWhere(input, value) {
        let i = 0;
        const deletedProducts = [];

        while (i < this.products.length) {
            if (this.products[i][input] == value) {
                deletedProducts.push(this.products.splice(i, 1)[0]);
            }

            else {
                i++;
            }
        }
        return deletedProducts;
    };

    createProduct({ data }) {
        const id = crypto.randomBytes(10).toString("hex");
        const newProduct = new Product(id, data);
        products.push(newProduct);
        return newProduct;
    };

    markAsReadRecordatorio({ id }) {
        const product = products.find(r => r.id === id);

        if (!product) {
            throw new Error("Product searched does not exist.");
        }
        this.product.availability = true;
        return product;
    };

}; 