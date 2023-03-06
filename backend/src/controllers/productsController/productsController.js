import { getAll, addNew } from '../../services/productService/productService.js';

const productsController = {};

productsController.getData = async (req, res) => {
    const getProducts = await getAll();
    res.json(getProducts);
};

productsController.postData = async (req, res, product) => {
    await addNew(product);
    res.redirect('/');
}

export default productsController;