class CartsDaoMem {
    constructor() {
        this.carts = []
    }

    #getIndex(id) {
        return this.carts.findIndex(p => p.id == id)
    }

    getCarts() {
        return this.carts;
    };

    getCart(id) {
        const searched = this.carts[ this.#getIndex(id) ];

        if (!searched) {
            console.log(`ERR! Cart with id = ${id} does not exist.`);
        };

        return searched;
    };

    saveCart(cart) {
        let id = 1;
        let time = new Date().toLocaleString();

        const lastCartId = this.carts.length === 0 ?
            id :
            this.carts[this.carts.length - 1].id + 1;

        const newCart = { ...cart, id: lastCartId, date: time};
        this.carts.push(newCart);
        console.log(`Cart ${newCart.name} successfully added.`);
        return newCart;
    };

    deleteCart(id) {
        const [ deletedCart ] = this.carts.splice(this.#getIndex(id), 1)
        return deletedCart
    };

    deleteAll() {
        this.carts = []
    };

    updateCart(id, newCart) {
        const index = this.#getIndex(id);
        const updatedCart = { ...this.newCart[index], ...newCart };
        this.carts.splice(index, 1, updatedCart);
        return updatedCart;
    };

};

export default CartsDaoMem;