import { getAll } from "../../services/cartsService/cartsService.js";

const cartsController = {};

cartsController.getCarts = async (req, res) => {
    const getCarts = await getAll();
    res.json(getCarts);
};



export default cartsController;