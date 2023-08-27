import './index.css'
import {
    decrementProductAmount,
    getSpecificProduct,
    incrementProductAmount
} from "../../../utils/cart.js";
import {renderButton} from "../../Product.js";
const CartProduct = (product, handler) => {

    const productButtonDOM = renderButton(product)

    const stored = getSpecificProduct(product.id)
    const cartProductDOM = document.createElement('div')
    cartProductDOM.classList.add('product-item')
    cartProductDOM.setAttribute('key',`cart-product-${product.id}`)

    const cartProductControlsDOM = document.createElement('div')
    cartProductControlsDOM.classList.add('product-controls')

    const cartProductControlsWrapperDOM = document.createElement('div')
    cartProductControlsWrapperDOM.classList.add('product-controls__quantity-wrapper')

    const decrementButtonDOM = document.createElement('button')
    decrementButtonDOM.classList.add('product-controls__decrement')
    decrementButtonDOM.innerText = '-'
    decrementButtonDOM.disabled = stored.quantity <= 1

    const incrementButtonDOM = document.createElement('button')
    incrementButtonDOM.classList.add('product-controls__increment')
    incrementButtonDOM.innerText = '+'
    incrementButtonDOM.disabled = stored.quantity === 10



    const quantityInfoDOM = document.createElement('span')
    quantityInfoDOM.classList.add('product-controls__quantity-info')
    quantityInfoDOM.innerText = `${product.quantity}`
    quantityInfoDOM.id = product.id

    const removeProductButtonDOM = document.createElement('button')
    removeProductButtonDOM.classList.add('product-item__delete-button')
    removeProductButtonDOM.innerText = 'Remove'
    removeProductButtonDOM.setAttribute('key',`product-remove-${product.id}`)

    cartProductControlsWrapperDOM.append(decrementButtonDOM, quantityInfoDOM, incrementButtonDOM)
    cartProductControlsDOM.append(cartProductControlsWrapperDOM, removeProductButtonDOM)
    cartProductDOM.append(cartProductControlsDOM)

    const commonHandler = async (cb, cb2) => {
        const stored = await cb(product)
        quantityInfoDOM.innerText = `${stored.quantity}`
        if (stored.quantity === 1){
            decrementButtonDOM.disabled = true
        } else if (stored.quantity === 10) {
            incrementButtonDOM.disabled = true
            productButtonDOM.disabled = true
        } else {
            incrementButtonDOM.disabled = false
            decrementButtonDOM.disabled = false
            productButtonDOM.innerHTML = ''
        }
        productButtonDOM.innerHTML = ''
        cb2(productButtonDOM)
    }

    incrementButtonDOM.addEventListener('click', () => commonHandler(incrementProductAmount,handler))
    decrementButtonDOM.addEventListener('click', () => commonHandler(decrementProductAmount, handler))

    cartProductDOM.insertAdjacentHTML('afterbegin', `
       <div class="product-item__content">
           <div class="product-item__img">
               <img src=${product.image} alt=${product.title}>
            </div>
            <div class="product-item__info">
                <h5 class="product-item__title">${product.title}</h5>
                <span class="product-item__price">$${product.price}</span>
            </div>
       </div>
      
    `)


    // document.addEventListener('DOMContentLoaded', () => {
    //     const item = [...document.querySelectorAll('.item')].find(el => +el.getAttribute('key') === product.id)
    //     const filter = document.querySelector('.cart-filter')
    //     const closeButton = document.querySelector('#cart-button--close')
    //     filter.addEventListener('click', () => {
    //         const stored = getSpecificProduct(product.id)
    //         const button = item.querySelector('.item__button')
    //         if (stored) {
    //             if (stored.quantity === 10){
    //                 button.disabled = true
    //             } else {
    //                 button.disabled = false
    //             }
    //         }
    //     })
    //     closeButton.addEventListener('click', () => {
    //         const stored = getSpecificProduct(product.id)
    //         const button = item.querySelector('.item__button')
    //         if (stored) {
    //             if (stored.quantity === 10){
    //                 button.disabled = true
    //             } else {
    //                 button.disabled = false
    //             }
    //         }
    //     })
    // })

    return cartProductDOM
}
export default CartProduct