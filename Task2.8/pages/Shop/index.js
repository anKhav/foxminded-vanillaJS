
import '../../styles/shop.css'
import {ProductList} from "../../components/ProductList.js";
import FilterForm from "../../components/FilterForm/FilterForm.js";
import data from "../../data.js";

const Shop = () => {
    let filterOptions = {
        title:null,
        topic:'All',
        price:100
    }

    const notFoundDOM = document.createElement('div')
    notFoundDOM.classList.add('not-found')
    notFoundDOM.innerText = 'Not found please select other filter options.'
    const topicHandler = (e, fn) => {
        filterOptions.topic = e.target.innerText
        const res = fn(filterOptions)
        const content = shopWrapperDOM.children[shopWrapperDOM.children.length - 1]
        shopWrapperDOM.removeChild(content)
        shopWrapperDOM.appendChild(res.length !== 0 ? ProductList(res) : notFoundDOM)
    }
    const searchHandler = (e, fn) => {
        filterOptions.title = e.target.value
        const res = fn(filterOptions)
        const content = shopWrapperDOM.children[shopWrapperDOM.children.length - 1]
        shopWrapperDOM.removeChild(content)
        shopWrapperDOM.appendChild(res.length !== 0 ? ProductList(res) : notFoundDOM)
    }
    const priceHandler = (e, fn) => {
        filterOptions.price = e.target.value
        const res = fn(filterOptions)
        const content = shopWrapperDOM.children[shopWrapperDOM.children.length - 1]
        shopWrapperDOM.removeChild(content)
        shopWrapperDOM.appendChild(res.length !== 0 ? ProductList(res) : notFoundDOM)
    }
    const handlers = {
        topic:topicHandler,
        search:searchHandler,
        price:priceHandler
    }
    const shopDOM = document.createElement('div')
    shopDOM.classList.add('shop')
    const shopWrapperDOM = document.createElement('div')
    shopWrapperDOM.classList.add('shop__wrapper')
    shopDOM.innerHTML = `
    <div class="shop__header">
        <h3 class="shop__subtitle">Home/All items</h3>
        <h1 class="shop__title">All items</h1>
    </div>`

    const {filterDOM} = FilterForm(filterOptions, handlers)
    shopWrapperDOM.append(filterDOM,ProductList(data))
    shopDOM.appendChild(shopWrapperDOM)

    return shopDOM
}
export default Shop