import CartsDaoFactory from '../../persistance/models/dao/cartsDao/cartsDaoFactory.js';

const cartsDaoFactory = CartsDaoFactory.getDao();

export async function getAll() {
    return await cartsDaoFactory.getCarts();
};