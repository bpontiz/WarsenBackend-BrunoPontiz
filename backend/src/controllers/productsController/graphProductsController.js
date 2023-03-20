import GraphProductsService from '../../services/productService/graphProductsService.js';
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const productSchema = buildSchema(`
    input ProductInput {
        name: String,
        price: Float,
        stock: Float,
        image: String,
        details: String
    }
    type Product {
        id: ID!
        name: String,
        price: Float,
        stock: Float,
        image: String,
        details: String,
        availability: Boolean
    }
    type Query {
        getProducts: [Product],
    }
    type Mutation {
        createProduct(data: ProductInput): Product,
        markAvailabilityProduct(id: ID!): Product,
        deleteNoAvailableProducts: [Product],
    }
`);

export default class GraphQLController {
    constructor() {
        const service = new GraphProductsService();
        return graphqlHTTP({
            schema: productSchema,
            rootValue: {
                getProducts: service.getProducts,
                createProduct: service.createProduct,
                markAvailabilityProduct: service.markAvailabilityProduct,
                deleteNoAvailableProducts: service.deleteNoAvailableProducts,
            },
            graphiql: true,
        })
    }
}