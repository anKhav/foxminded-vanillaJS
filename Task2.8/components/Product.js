import '../styles/product.css'
import {addToCart, getSpecificProduct} from "../utils/cart.js";

export const renderButton = (product) => {
    const productButtonDOM = document.createElement('button')
    productButtonDOM.classList.add('item__button')
    productButtonDOM.id = `button-${product.id}`
    productButtonDOM.innerHTML = `<span class="cross" id="cross-${product.id}">+</span><span class="add" id="add-${product.id}">Add</span>`
    return productButtonDOM
}

export const Product = (product) => {
    const starTemplate = `<div class="star">
                        <svg width="13" height="13" viewBox="0 0 0 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.92143 4.83452L6.40831 0L4.89532 4.83452H0L3.96072 7.82226L2.44773 12.6574L6.40831 9.6684L10.369 12.6574L8.85604 7.82226L12.8168 4.83452H7.92143Z" fill="#CC5520"/>
                        </svg>
                    </div>`
    const getFullRatingTemplate = (number) => {
        const arr = []
        for (let i= 0; i <= number; i++){
            arr.push(starTemplate)
        }
        return arr.join(' ')
    }

    const productDOM = document.createElement('div')
    productDOM.classList.add('item')
    productDOM.setAttribute('key', `${product.id}`)

    const productImageWrapperDOM = document.createElement('div')
    productImageWrapperDOM.classList.add('item__image')

    const productImageDOM = document.createElement('img')
    productImageDOM.setAttribute('src', product.image)
    productImageDOM.setAttribute('alt', product.title)


    const filter = document.querySelector('.cart-filter')
    const closeCartButton = document.querySelector('#cart-button--close')
    closeCartButton.addEventListener('click', () => {
        const stored = getSpecificProduct(product.id)
        if (stored) {
            productButtonDOM.disabled = stored.quantity === 10;
        }
    })
    filter.addEventListener('click', () => {
        const stored = getSpecificProduct(product.id)
        if (stored) {
            productButtonDOM.disabled = stored.quantity === 10;
        }
    })

    const productButtonDOM = renderButton(product)


    const productInfoDOM = document.createElement('div')
    productInfoDOM.classList.add('product__info')
    productInfoDOM.innerHTML = `<h4 class="item__title">${product.title}</h4>
                <span class="item__price">$${product.price}</span>
                <div class="item__rating">
                    ${getFullRatingTemplate(product.rating)}
                </div>
                <span class="item__topic">${product.topic}</span>`


    productImageWrapperDOM.append(productImageDOM, productButtonDOM)

    productDOM.append(productImageWrapperDOM, productInfoDOM)

    const addProductToCart = async () => {
        await addToCart({...product, quantity:1})
        const storedProduct = getSpecificProduct(product.id)
        productButtonDOM.disabled = storedProduct.quantity === 10;
    }

    productButtonDOM.addEventListener('click', async () => {
       await addProductToCart()
    })

    const setButtonState = () => {
        const storedProduct = getSpecificProduct(product.id)
        if (storedProduct) {
            productButtonDOM.disabled = storedProduct.quantity === 10;
        }
    }
    setButtonState()
    return productDOM
}
