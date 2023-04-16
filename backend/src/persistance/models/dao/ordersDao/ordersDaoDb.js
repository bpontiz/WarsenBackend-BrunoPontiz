import ConfigOrdersDb from "../../../dbconnections/mongo/orders/configOrdersDb.js";
import MongoClient from "../../../dbconnections/mongo/orders/mongoDbConnection.js";
import ordersModel from "../../mongo/ordersMongoModel.js";
import {detailGmail} from '../../../../services/ordersService/ordersMailing.js';

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

    async getOrder(id) {
        let searched;

        try {
            searched = await ordersModel.findOne({ _id: id }, this.projection);
        }

        catch(err) {
            console.log(`ERR! Could not get order.`, err);
        }

        if(!searched) {
            console.log(`ERR! Could not get order with id = ${id}.`, err);
        }
    };

    async addOrder(order) {
        let time = new Date().toLocaleString();

        try {
            const findOrders = await ordersModel.find({}, this.projection).lean();

            async function saveOrderIntoDb(newOrder) {
                await ordersModel.create(newOrder);
                console.log(`New order from ${newOrder.email} successfully added.`);
                return newOrder;
            };

            if(findOrders.length == 0) {
                const newOrderNumber = 0;
                const newOrder = { ...order, date: time, orderNumber: newOrderNumber + 1};
                detailGmail(newOrder.email, newOrder);
                return saveOrderIntoDb(newOrder);
            }

            else {
                const findLastOrderNumber = findOrders[findOrders.length - 1].orderNumber;
                const newOrder = { ...order, date: time, orderNumber: findLastOrderNumber + 1};
                console.log(newOrder);
                detailGmail(newOrder.email, newOrder);
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
};

export default OrdersDaoDb;