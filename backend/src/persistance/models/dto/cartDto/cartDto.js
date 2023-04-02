export default class CartDto {
    constructor(email, name, price, image, quantity, details, address) {
        this.email = email
        this.name = name
        this.price = price
        this.quantity = quantity
        this.image = image
        this.details = details
        this.address = address
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