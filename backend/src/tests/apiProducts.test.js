import { strictEqual, deepStrictEqual } from 'assert';
import axios from 'axios';
import productsForTesting from './productsForTesting.js';

const testNewProduct = productsForTesting.testNewProduct;

const testModifyProduct = productsForTesting.modifyProduct;

const url = 'http://localhost:8081/api/products';

const getProducts = () => axios(url);

const postProduct = (testNewProduct) => axios.post(url, testNewProduct);

const deleteProduct = () => axios.delete(url + '/6413927d69ceeed46c153768');

const modifyProduct = (testModifyProduct) => axios.put(url + '/6413927d69ceeed46c153768', testModifyProduct);

describe('Testing API Products functionality.', function() {

    it('Should return all database products.', async function () {
        const { data } = await getProducts();
        strictEqual(data.length, 15);
    });

    it('Should save new product.', async function() {
        const { data } = await postProduct(testNewProduct);
        strictEqual(data.name, testNewProduct.name);
    });

    it('Should delete an specified product.', async function() {
        const { data } = await deleteProduct();
        const id = '6413927d69ceeed46c153768';
        strictEqual(data._id, id);
    });

    it('Should modify an specified product.', async function() {
        const { data } = await modifyProduct(testModifyProduct);
        const id = '6413927d69ceeed46c153768';
        strictEqual(data._id, id);
    });
});