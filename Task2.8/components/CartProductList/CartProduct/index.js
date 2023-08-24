import './index.css'
import {
    decrementProductAmount,
    getCartProducts,
    getSpecificProduct,
    incrementProductAmount, removeProductFromCart
} from "../../../utils/cart.js";
const CartProduct = (product) => {
    const stored = getSpecificProduct(product.id)
    // console.log(product);
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

    const commonHandler = async (cb) => {
        const stored = await cb(product)
        console.log(stored.quantity);
        quantityInfoDOM.innerText = `${stored.quantity}`
        if (stored.quantity === 1){
            decrementButtonDOM.disabled = true
        } else if (stored.quantity === 10) {
            incrementButtonDOM.disabled = true
        } else {
            incrementButtonDOM.disabled = false
            decrementButtonDOM.disabled = false
        }
    }

    incrementButtonDOM.addEventListener('click', () => commonHandler(incrementProductAmount))
    decrementButtonDOM.addEventListener('click', () => commonHandler(decrementProductAmount))

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

    return cartProductDOM
}
export default CartProduct