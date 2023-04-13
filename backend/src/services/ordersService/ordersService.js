import OrdersDaoFactory from '../../persistance/models/dao/ordersDao/ordersDaoFactory.js';

const ordersDaoFactory = OrdersDaoFactory.getDao();

export async function getAll() {
    return await ordersDaoFactory.getOrders();
};

export async function addNew(order) {
    return await ordersDaoFactory.addOrder(order);
};

export async function getOne(email) {
    return await ordersDaoFactory.getOrdersByEmail(email);
};

export async function deleteOne(orderNumber) {
    return await ordersDaoFactory.deleteOrder(orderNumber);
};