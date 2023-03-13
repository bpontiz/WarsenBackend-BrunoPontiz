class ProductsDaoMem {
    constructor() {
        this.products = []
    }

    #getIndex(id) {
        return this.products.findIndex(p => p.id == id)
    }

    getProducts() {
        return this.products;
    };

    getProduct(id) {
        const searched = this.products[ this.#getIndex(id) ];

        if (!searched) {
            console.log(`ERR! Product with id = ${id} does not exist.`);
        };

        return searched;
    };

    saveProduct(product) {
        let id = 1;

        const lastProductId = this.products.length === 0 ?
            id :
            this.products[this.products.length - 1].id + 1;

        const newProduct = { ...product, id: lastProductId};
        this.products.push(newProduct);
        console.log(`Product ${newProduct.name} successfully added.`);
        return newProduct;
    };

    deleteProduct(id) {
        const [ deletedProduct ] = this.products.splice(this.#getIndex(id), 1)
        return deletedProduct
    };

    deleteAll() {
        this.products = []
    };

    updateProduct(id, newProduct) {
        const index = this.#getIndex(id);
        const updatedProduct = { ...this.newProduct[index], ...newProduct };
        this.products.splice(index, 1, updatedProduct);
        return updatedProduct;
    };

};

export default ProductsDaoMem;