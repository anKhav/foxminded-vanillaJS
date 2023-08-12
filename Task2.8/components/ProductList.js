import {Product} from "./Product.js";

export const ProductList = (data) => {
    return(
        `${data.map(item => Product(item)).join('')}
        <button class="shop__content-button">All foxes</button>`
    )
}