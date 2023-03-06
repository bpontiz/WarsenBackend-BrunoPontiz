

export async function getAll() {
    return await productsMongo.getProducts();
};

export async function addNew(product) {
    return await productsMongo.saveProduct(product);
};