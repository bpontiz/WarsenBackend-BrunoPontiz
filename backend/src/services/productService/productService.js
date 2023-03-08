import ProductsDaoDb from '../../persistance/models/dao/productsDao/ProductsDaoDb.js';

const productsDaoDb = new ProductsDaoDb();

export async function getAll() {
    return await productsDaoDb.getProducts();
};

export async function addNew(product) {
    return await productsDaoDb.saveProduct(product);
};

export async function getOne(id) {
    return await productsDaoDb.getProduct(id);
};

export async function deleteOne(id) {
    return await productsDaoDb.deleteProduct(id);
};

export async function updateOne(id, newProduct) {
    return await productsDaoDb.updateProduct(id, newProduct);
};