import {getCartProducts, removeProductFromCart} from "../../utils/cart.js";
import CartProduct from "./CartProduct/index.js";

import './index.css'


const CartProductList = () => {
    const cart = getCartProducts()
    const cartProductListDOM = document.createElement('div')
    cartProductListDOM.classList.add('cart-product__list')
    cart && cart.data.forEach(product => cartProductListDOM.append(CartProduct(product)))

    cartProductListDOM.addEventListener('click', (e) => {
        const key = e?.target?.getAttribute('key')?.split('-')[e.target.getAttribute('key').split('-').length - 1]
        if (key){
            const cart = removeProductFromCart(+key)
            cartProductListDOM.innerHTML = ``
            cart && cart.data.forEach(product => cartProductListDOM.append(CartProduct(product)))
        }
    })
    return cartProductListDOM
}
export default CartProductList