import {getCartProducts} from "../../utils/cart.js";
import CartProduct from "./CartProduct/index.js";

import './index.css'


const CartProductList = () => {
    const cart = getCartProducts()
    const cartProductListDOM = document.createElement('div')
    cartProductListDOM.classList.add('cart-product__list')

    cart && cart.data.forEach(product => cartProductListDOM.append(CartProduct(product)))
    cartProductListDOM.addEventListener('click', (e) => {
        console.log(e.target)
    })
    return cartProductListDOM
}
export default CartProductList