import { getAll, addNew, getOne, deleteOne } from '../../services/ordersService/ordersService.js';

const ordersController = {};

ordersController.getOrders = async (req, res) => {
    const getOrders = await getAll();
    res.json(getOrders);
};

ordersController.addNew = async (req, res) => {
    const order = req.body;
    const addOrder = await addNew(order);
    res.json(addOrder);
};

ordersController.getOrder = async (req, res) => {
    const getEmail = req.params.email;
    const getOrder = await getOne(getEmail);
    res.json(getOrder);
};

ordersController.deleteOrder = async (req, res) => {
    const getOrderNumber = req.params.orderNumber;
    const deleteOrder = await deleteOne(getOrderNumber);
    res.json(deleteOrder);
};

export default ordersController;