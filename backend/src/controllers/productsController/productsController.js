import { getAll, addNew, getOne, deleteOne, updateOne } from '../../services/productService/productService.js';

const productsController = {};

function getId(req) {
    const id = Number(req.params.id);
    return id;
};

productsController.getProducts = async (req, res) => {
    const getProducts = await getAll();
    res.json(getProducts);
};

productsController.postProduct = async (req, res) => {
    const product = req.body;
    await addNew(product);
    res.redirect('/');
};

productsController.getProductById = async (req, res) => {
    const getProduct = await getOne(getId);
    res.json(getProduct);
};

productsController.deleteProductById = async (req, res) => {
    const deletedProduct = await deleteOne(getId);
    res.json(deletedProduct);
};

productsController.updateProductById = async (req, res) => {
    const newProduct = req.body;
    const updatedProduct = await updateOne(getId, newProduct);
    res.json(updatedProduct);
};

export default productsController;