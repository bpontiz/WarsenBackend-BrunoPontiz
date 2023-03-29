export default class CartDto {
    constructor(username, name, price, image, quantity, address, email) {
        this.username = username
        this.address = address
        this.email = email
        this.name = name
        this.price = price
        this.image = image
        this.quantity = quantity
    }
};

export function asDto(cart) {
    if ( Array.isArray(cart) ) {
        return cart.map( cart => new CartDto(cart));
    }
    else {
        return new CartDto(cart);
    }
}