import '../styles/shop.css'
import imgShop from '/shop__img.jpg'
import searchIcon from '/search-icon.svg'
import {Product} from "../components/Product.js";
import {ProductList} from "../components/ProductList.js";

export const Shop = (data) => {
    const products = [
        {
            title:'Title',
            img:imgShop,
            price:120,
            topic:'Forest',
            rating:2
        },
        {
            title:'Title',
            img:imgShop,
            price:120,
            topic:'Forest',
            rating:3
        },
        {
            title:'Title',
            img:imgShop,
            price:120,
            topic:'Forest',
            rating:1
        }
    ]

    document.body.classList.add('about')
    return(
        `<main class="shop">
    <div class="shop__header">
        <h3 class="shop__subtitle">Home/All items</h3>
        <h1 class="shop__title">All items</h1>
    </div>
<div class="shop__wrapper">
    <form class="shop__filter">
        <div class="shop__search">
            <input id="search_input" type="text" placeholder="Search">
            <label for="search_input" class="search__icon">
                <img src=${searchIcon} alt="">
            </label>
        </div>
        <fieldset class="topics">
            <span class="topics__title">Topic</span>
            <input type="radio" name="fox" value="Forest" id="forest">
            <label id="label" data-filter="topic" for="forest">Forest</label>
            <input type="radio" name="fox" value="Fox kids" id="kids">
            <label id="label" data-filter="topic" for="kids">Fox Kids</label>
             <input type="radio" name="fox" value="All" id="all" checked>
            <label id="label" data-filter="topic" for="all">All</label>
           <input type="radio" name="fox" value="Other" id="other">
            <label id="label" data-filter="topic" for="other">Other</label>
            
        </fieldset>
        <fieldset class="price">
            <label for="slider" class="price__title">Price</label>
            <div class="range">
                <div class="range__content">
                    <div class="range__slider">
                        <div class="range__slider-line" id="range-line"></div>
                    </div>

                    <div class="range__thumb" id="range-thumb">
                    </div>

                    <input type="range" class="range__input" id="slider" min="0" max="100" value="100" id="label" step="1">
                </div>
            </div>
            <div class="range__value">
                <p>Value: <span class="range__value-number" id="range-number">50</span>$</p>
            </div>
        </fieldset>
    </form>
    <section class="section-outer section-inner shop__content">
        ${ProductList(data)}
    </section>
</div>
</main>`
    )
}