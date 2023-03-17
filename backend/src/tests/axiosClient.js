import axios from 'axios';

let urlProducts = `http://localhost:8081/api/products`;

if (process.argv[2] === 'get') {
    axios(urlProducts)
    .then( response => console.log(response.data) )
    .catch( error => console.log(error) );
};

if (process.argv[2] === 'post') {
    const testNewProduct = {
        _id: '6413927d69ceeed46c153768',
        name: 'Belgium',
        price: 84,
        stock: 8,
        image: 'https://images.footballfanatics.com/belgium-national-team/belgium-home-shirt-2019-21-with-lukaku-9-printing_ss4_p-12078485+u-a7fhfv2vlieffonck35r+v-ae3e2e7510324e3fb7207e90cc8ea637.jpg?_hv=2&w=340',
        details: 'Belgium Home Shirt 2019-21 with Lukaku 9 printing'
    };
    
    axios.post(urlProducts, testNewProduct)
        .then( response => console.log(response.data) )

        .catch( error => console.log(error) );
};

if (process.argv[2] === 'delete') {
    axios.delete('http://localhost:8081/api/products/6413927d69ceeed46c153768')
        .then( response => console.log(response.data) )
        .catch( error => console.log(error) );
};

if (process.argv[2] === 'put') {
    const modifyProduct = {
        _id: '6413927d69ceeed46c153768',
        name: 'Borussia Dortmund',
        price: 49,
        stock: 36,
        image: 'https://images.footballfanatics.com/borussia-dortmund/borussia-dortmund-training-jersey-yellow_ss4_p-13311831+u-5apxic234n7wtr7dsmoe+v-64721e2d0572479bb18f8a3364a7f970.jpg?_hv=2&w=340',
        details: 'Borussia Dortmund Training Jersey - Yellow'
    };

    axios.put('http://localhost:8081/api/products/6413927d69ceeed46c153768', modifyProduct)
        .then( response => console.log(response.data) )
        .catch( error => console.log(error) );
};

