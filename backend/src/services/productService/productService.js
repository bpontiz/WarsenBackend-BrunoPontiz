import ProductsDaoFactory from '../../persistance/models/dao/productsDao/productsDaoFactory.js';

const productsDaoFactory = ProductsDaoFactory.getDao();

export async function getAll() {
    return await productsDaoFactory.getProducts();
};

export async function addNew(product) {
    return await productsDaoFactory.saveProduct(product);
};

export async function getOne(id) {
    return await productsDaoFactory.getProduct(id);
};

export async function deleteOne(id) {
    return await productsDaoFactory.deleteProduct(id);
};

export async function updateOne(id, newProduct) {
    return await productsDaoFactory.updateProduct(id, newProduct);
};