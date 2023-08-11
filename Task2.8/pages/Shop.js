import '../styles/shop.css'
import imgShop from '/shop__img.jpg'
import searchIcon from '/search-icon.svg'

export const Shop = () => {
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
            <label for="forest">Forest</label>
            <input type="radio" name="fox" value="Forest" id="forest">
            <label for="kids">Fox Kids</label>
            <input type="radio" name="fox" value="Fox kids" id="kids">
            <label for="all">All</label>
            <input type="radio" name="fox" value="All" id="all">
            <label for="other">Other</label>
            <input type="radio" name="fox" value="Other" id="other">
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

                    <input type="range" class="range__input" id="slider" min="0" max="100" value="50" step="1">
                </div>
            </div>
            <div class="range__value">
                <p>Value: <span class="range__value-number" id="range-number">50</span>$</p>
            </div>
        </fieldset>
    </form>
    <section class="section-outer section-inner shop__content">
        <div class="item">
            <div class="item__image">
                <img src=${imgShop} alt="fox">
                <button class="item__button"><span class="cross">+</span><span class="add">Add</span></button>
            </div>
            <div class="item__info">
                <h4 class="item__title">Stylish chair</h4>
                <span class="item__price">$120</span>
                <div class="item__rating">
                    <div class="star">
                        <svg width="70" height="13" viewBox="0 0 70 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.92143 4.83452L6.40831 0L4.89532 4.83452H0L3.96072 7.82226L2.44773 12.6574L6.40831 9.6684L10.369 12.6574L8.85604 7.82226L12.8168 4.83452H7.92143Z" fill="#CC5520"/>
                        </svg>
                    </div>
                </div>
                <span class="item__topic">Forest</span>
            </div>
        </div>
        <div class="item">
            <div class="item__image">
                <img src=${imgShop} alt="fox">
                <button class="item__button"><span class="cross">+</span><span class="add">Add</span></button>
            </div>
            <div class="item__info">
                <h4 class="item__title">Stylish chair</h4>
                <span class="item__price">$120</span>
                <div class="item__rating">
                    <div class="star">
                        <svg width="70" height="13" viewBox="0 0 70 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.92143 4.83452L6.40831 0L4.89532 4.83452H0L3.96072 7.82226L2.44773 12.6574L6.40831 9.6684L10.369 12.6574L8.85604 7.82226L12.8168 4.83452H7.92143Z" fill="#CC5520"/>
                        </svg>
                    </div>
                </div>
                <span class="item__topic">Forest</span>
            </div>
        </div>
        <div class="item">
            <div class="item__image">
                <img src=${imgShop} alt="fox">
                <button class="item__button"><span class="cross">+</span><span class="add">Add</span></button>
            </div>
            <div class="item__info">
                <h4 class="item__title">Stylish chair</h4>
                <span class="item__price">$120</span>
                <div class="item__rating">
                    <div class="star">
                        <svg width="70" height="13" viewBox="0 0 70 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.92143 4.83452L6.40831 0L4.89532 4.83452H0L3.96072 7.82226L2.44773 12.6574L6.40831 9.6684L10.369 12.6574L8.85604 7.82226L12.8168 4.83452H7.92143Z" fill="#CC5520"/>
                        </svg>
                    </div>
                </div>
                <span class="item__topic">Forest</span>
            </div>
        </div>
        <button class="shop__content-button">All foxes</button>
    </section>
</div>
</main>`
    )
}