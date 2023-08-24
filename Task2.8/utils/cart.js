import products from "../data.js";

export const addToCart = async (product) => {
    const cart = await JSON.parse(localStorage.getItem('cart')) || { data: [], totalPrice: 0 };
    const existingProductIndex = cart.data.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {

        cart.data[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.data.push(product);
    }
    cart.totalPrice = cart.data.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const incrementProductAmount = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const existingProductIndex = cart.data.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
        cart.data[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
    }
    cart.totalPrice = cart.data.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart.data[existingProductIndex]
}
export const decrementProductAmount = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const existingProductIndex = cart.data.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
        cart.data[existingProductIndex].quantity -= 1;
    } else {
        product.quantity = 1;
    }
    cart.totalPrice = cart.data.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart.data[existingProductIndex]
}



export const getCartProducts = () => JSON.parse(localStorage.getItem('cart'))
export const getSpecificProduct = (id) => {
    const products =  JSON.parse(localStorage.getItem('cart')).data
    return products.find(product => product.id === id)
}
export const removeProductFromCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'))

    const resultedCart = cart.data.filter(product => product.id !== id)

    const newCart = {data:resultedCart, totalPrice:0}
    newCart.totalPrice = resultedCart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return newCart
}