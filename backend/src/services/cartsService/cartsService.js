import CartsDaoFactory from '../../persistance/models/dao/cartsDao/cartsDaoFactory.js';

const cartsDaoFactory = CartsDaoFactory.getDao();

export async function getAll() {
    return await cartsDaoFactory.getCarts();
};

export async function addCart(cart) {
    return await cartsDaoFactory.saveCart(cart);
};

export async function getCartByEmail(email) {
    return await cartsDaoFactory.getCartByEmail(email);
}

export async function getCart(id) {
    return await cartsDaoFactory.getCart(id);
};

export async function deleteCart(id) {
    return await cartsDaoFactory.deleteCart(id);
};

export async function updateCart(id, newCart) {
    return await cartsDaoFactory.updateCart(id, newCart); 
};