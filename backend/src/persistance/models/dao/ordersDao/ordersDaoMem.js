class OrdersDaoMem {
    constructor() {
        this.orders = []
    }

    #getIndex(orderNumber) {
        return this.orders.findIndex(p => p.orderNumber == orderNumber)
    }

    getOrders() {
        return this.orders;
    };

    getOrder(orderNumber) {
        const searched = this.orders[ this.#getIndex(orderNumber) ];

        if (!searched) {
            console.log(`ERR! Order with orderNumber = ${orderNumber} does not exist.`);
        };

        return searched;
    };

    saveOrder(order) {
        let orderNumber = 1;
        let time = new Date().toLocaleString();

        const lastOrderNumber = this.orders.length === 0 ?
            orderNumber :
            this.orders[this.orders.length - 1].orderNumber + 1;

        const newOrder = { ...order, orderNumber: lastOrderNumber, date: time};
        this.orders.push(newOrder);
        console.log(`Order ${newOrder.name} successfully added.`);
        return newOrder;
    };

    deleteOrder(orderNumber) {
        const [ deletedOrder ] = this.orders.splice(this.#getIndex(orderNumber), 1)
        return deletedOrder
    };

    deleteAll() {
        this.orders = []
    };

    updateCart(orderNumber, newOrder) {
        const index = this.#getIndex(orderNumber);
        const updatedOrder = { ...this.newOrder[index], ...newOrder };
        this.orders.splice(index, 1, updatedOrder);
        return updatedOrder;
    };

};

export default OrdersDaoMem;