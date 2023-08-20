export const addToCart = async (product) => {
    const cart = await JSON.parse(localStorage.getItem('cart')) || []
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCartProducts = () => JSON.parse(localStorage.getItem('cart'))