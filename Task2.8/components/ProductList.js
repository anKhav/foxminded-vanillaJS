import {Product} from "./Product.js";


export const ProductList = (data) => {
    const productLIstDOM = document.createElement('div')
    productLIstDOM.classList.add('section-outer')
    productLIstDOM.classList.add('section-inner')
    productLIstDOM.classList.add('shop__content')
    data.forEach(product => productLIstDOM.appendChild(Product(product)))
    return productLIstDOM
}