import { getAll, addCart, getCart, deleteCart, updateCart } from "../../services/cartsService/cartsService.js";

const cartsController = {};

cartsController.getCarts = async (req, res) => {
    const getCarts = await getAll();
    res.json(getCarts);
};

cartsController.postCart = async (req, res) => {
    const postCart = req.body;
    await addCart(postCart);
    res.json(postCart);
};

cartsController.getCartById = async (req, res) => {
    const id = req.params._id;
    const getOne = await getCart(id);
    res.json(getOne);
};

cartsController.deleteCartById = async (req, res) => {
    const id = req.params._id;
    const deletedCart = await deleteCart(id);
    res.json(deletedCart);
};

cartsController.updateCartById = async (req, res) => {
    const id = req.params._id;
    const newCart = req.body;
    await updateCart(id, newCart);
    res.json(newCart);
};

export default cartsController;