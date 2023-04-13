import ConfigOrdersDb from "../../../dbconnections/mongo/orders/configOrdersDb.js";
import MongoClient from "../../../dbconnections/mongo/orders/mongoDbConnection.js";
import ordersModel from "../../mongo/ordersMongoModel.js";

class OrdersDaoDb {
    constructor() {
        this.client = new MongoClient()
        this.client.connect()
        this.projection = ConfigOrdersDb.db.projection
    }

    async getOrders() {
        try {
            const searched = await ordersModel.find({}, this.projection).lean();
            const reverseSearched = searched.slice().reverse();
            if(reverseSearched) {
                return reverseSearched;
            }
            return [];
        }

        catch(err) {
            console.log('ERR! Could not get orders.', err);
        }
    };

    async getCart(id) {
        let searched;

        try {
            searched = await ordersModel.findOne({ _id: id }, this.projection);
        }

        catch(err) {
            console.log(`ERR! Could not get cart.`, err);
        }

        if(!searched) {
            console.log(`ERR! Could not get cart with id = ${id}.`, err);
        }
    };

    async addOrder(order) {
        let time = new Date().toLocaleString();

        try {
            const findOrders = await ordersModel.find({}, this.projection).lean();

            console.log(findOrders);

            async function saveOrderIntoDb(newOrder) {
                await ordersModel.create(newOrder);
                console.log(`New order from ${newOrder.email} successfully added.`);
                return newOrder;
            };

            if(findOrders.length == 0) {
                const newOrderNumber = 0;
                const newOrder = { ...order, date: time, orderNumber: newOrderNumber + 1};
                return saveOrderIntoDb(newOrder);
            }

            else {
                const findLastOrderNumber = findOrders[findOrders.length - 1].orderNumber;
                const newOrder = { ...order, date: time, orderNumber: findLastOrderNumber + 1};
                return saveOrderIntoDb(newOrder);
            };
        }

        catch(err) {
            console.log('ERR! Could not add new order.', err);
        }
    };

    async getOrdersByEmail(email) {
        let searched;

        let filterSearched = [];

        try {
            searched = await ordersModel.find({}, this.projection);

            for(let i of searched) {
                if(i.email === email) {
                    filterSearched.push(i);
                }
            };

            if( filterSearched.length === 0 ) {
                console.log(`There is no order.`);
            }
            
            else {
                return filterSearched;
            }
        }

        catch(err) {
            console.log('ERR! Could not get order by user email.', err);
        }
    }

    async deleteOrder(orderNumber) {
        let deleted;
        let searched;

        try {
            searched = await ordersModel.findOne({ orderNumber: orderNumber }, this.projection);
            deleted = await ordersModel.deleteOne({ orderNumber: orderNumber });
            deleted.deletedCount != 0 ?
                console.log(`Order number = ${orderNumber} successfully deleted.`) :
                null;
        }

        catch (err) {
            console.log('ERR! Could not delete order.', err);
        };

        if (!searched) {
            console.log(`ERR! Could not find order with umber = ${id}`);
        };

        return searched;
    };

    async updateCart(id, newCart) {
        let result;

        try {
            result = await ordersModel.findOneAndReplace({ _id: id }, newCart);
        }

        catch(err) {
            console.log('ERR! Could not update cart.', err);
        }

        if (!result) {
            console.log(`ERR! Could not find cart with id = ${id}`, { id });
        }

        else {
            console.log(`Cart with id = ${id} successfully updated.`);
        };

        return newCart;
    };

};

export default OrdersDaoDb;