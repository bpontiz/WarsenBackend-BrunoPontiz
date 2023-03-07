import ProductsDaoDb from '../../persistance/models/dao/productsDao/ProductsDaoDb.js';

export async function getAll() {
    return await ProductsDaoDb.getProducts();
};

export async function addNew(product) {
    return await ProductsDaoDb.saveProduct(product);
};

export async function getOne(id) {
    return await ProductsDaoDb.getProduct(id);
};

export async function deleteOne(id) {
    return await ProductsDaoDb.deleteProduct(id);
};

export async function updateOne(id) {
    return await ProductsDaoDb.updateProduct(id);
};