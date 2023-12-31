import {getCartProducts, removeProductFromCart} from "../../utils/cart.js";
import CartProduct from "./CartProduct/index.js";

import './index.css'


const CartProductList = (handler) => {
    const cart = getCartProducts()
    const cartProductListDOM = document.createElement('div')
    cartProductListDOM.classList.add('cart-product__list')
    cart && cart.data.forEach(product => cartProductListDOM.append(CartProduct(product, handler)))

    cartProductListDOM.addEventListener('click', (e) => {
        const key = e?.target?.getAttribute('key')?.split('-')
        if (key && e.target.classList.contains('product-item__delete-button')){
            const id = +key[key.length - 1]
            const cart = removeProductFromCart(id)
            cartProductListDOM.innerHTML = ``
            cart && cart.data.forEach(product => cartProductListDOM.append(CartProduct(product, handler)))
        }
    })
    return cartProductListDOM
}
export default CartProductList