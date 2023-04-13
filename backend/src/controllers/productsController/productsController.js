import { getAll, addNew, getOne, deleteOne, updateOne } from '../../services/productService/productService.js';

const productsController = {};

productsController.getProducts = async (req, res) => {
    const getProducts = await getAll();
    res.json(getProducts);
};

productsController.getProductsByCategory = async (req, res) => {
    const category = req.params.category.toLowerCase();
    if(category === 'shirts') {
        const getProducts = await getAll();
        res.json(getProducts);
    }

    else {
        res.json('No category has been matched.');
    };
}

productsController.postProduct = async (req, res) => {
    const product = req.body;
    await addNew(product);
    res.json(product);
};

productsController.getProductById = async (req, res) => {
    const id = req.params._id;
    const getProduct = await getOne(id);
    res.json(getProduct);
};

productsController.deleteProductById = async (req, res) => {
    const id = req.params._id;
    const deletedProduct = await deleteOne(id);
    res.json(deletedProduct);
};

productsController.updateProductById = async (req, res) => {
    const id = req.params._id;
    const newProduct = req.body;
    const updatedProduct = await updateOne(id, newProduct);
    res.json(updatedProduct);
};

export default productsController;