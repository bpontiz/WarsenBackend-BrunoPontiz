import { getAll, addNew, getOne, deleteOne, updateOne } from '../../services/productService/productService.js';

const productsController = {};

productsController.getProducts = async (req, res) => {
    const getProducts = await getAll();
    res.json(getProducts);
};

productsController.postProduct = async (req, res) => {
    const product = req.body;
    await addNew(product);
    res.json(product);
};

productsController.getProductById = async (req, res) => {
    const id = Number(req.params.id);
    const getProduct = await getOne(id);
    res.json(getProduct);
};

productsController.deleteProductById = async (req, res) => {
    const id = Number(req.params.id);
    const deletedProduct = await deleteOne(id);
    res.json(deletedProduct);
};

productsController.updateProductById = async (req, res) => {
    const id = Number(req.params.id);
    const newProduct = req.body;
    const updatedProduct = await updateOne(id, newProduct);
    res.json(updatedProduct);
};

export default productsController;