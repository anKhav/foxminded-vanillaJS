import '../../styles/cart.css'
import CartProductList from "../CartProductList/index.js";
import {getCartProducts} from "../../utils/cart.js";

const Cart = () => {
    const handler = (item) => {
        item.disabled = false
    }

    const filterDOM = document.createElement('div')
    filterDOM.classList.add('cart-filter')

    const additionalMenuDOM = document.createElement('div')
    additionalMenuDOM.classList.add('nav-additional')

    const cartDOM = document.createElement('div')
    cartDOM.classList.add('cart')

    const cartInputCheckboxDOM = document.createElement('input')
    cartInputCheckboxDOM.setAttribute('type', 'checkbox')
    cartInputCheckboxDOM.id = 'cart'

    const cartTitleDOM = document.createElement('h3')
    cartTitleDOM.classList.add('cart__title')
    cartTitleDOM.innerText = 'Your bag'

    const cartSubtitleDOM = document.createElement('h3')
    cartSubtitleDOM.classList.add('cart__subtitle')
    cartSubtitleDOM.innerText = 'box'


    const cartButtonCloseDOM = document.createElement('button')
    cartButtonCloseDOM.classList.add('cart__button--close')
    cartButtonCloseDOM.id = 'cart-button--close'
    cartButtonCloseDOM.innerText = 'Close'

    const cartContentDOM = document.createElement('div')
    cartContentDOM.classList.add('cart__content')
    cartContentDOM.append(CartProductList(handler))

    const cartTotalPriceDOM = document.createElement('p')
    cartTotalPriceDOM.classList.add('cart__total-price')
    cartTotalPriceDOM.innerText = '0'

    const cartButtonCheckoutDOM = document.createElement('button')
    cartButtonCheckoutDOM.classList.add('cart__button')
    cartButtonCheckoutDOM.innerText = 'Checkout'

    const closeCart = () => {
        cartInputCheckboxDOM.checked = false
        filterDOM.classList.remove('cart-filter--on')
        document.body.classList.remove('no-scroll')
    }

    cartDOM.addEventListener('click', () => {
        cartTotalPriceDOM.innerText = `$${getCartProducts().totalPrice}`
    })

    cartDOM.append(cartButtonCloseDOM, cartSubtitleDOM, cartTitleDOM, cartContentDOM, cartTotalPriceDOM, cartButtonCheckoutDOM)
    additionalMenuDOM.append(filterDOM, cartInputCheckboxDOM, cartDOM)

    cartInputCheckboxDOM.checked && filterDOM.classList.add('filter--on')

    cartInputCheckboxDOM.addEventListener('change', () => {
        filterDOM.classList.add('cart-filter--on')
        document.body.classList.add('no-scroll')
        cartContentDOM.innerHTML = ''
        cartContentDOM.append(CartProductList(handler))
        cartTotalPriceDOM.innerText = getCartProducts() && `$${getCartProducts()?.totalPrice}`
    })

    cartButtonCloseDOM.addEventListener('click', closeCart)
    filterDOM.addEventListener('click', closeCart)

    additionalMenuDOM.insertAdjacentHTML('beforeend' , `
      <label for="cart" class="nav-additional__link">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse class="svg-fill" cx="8.54183" cy="16.2916" rx="1.45833" ry="1.45833"/>
          <circle class="svg-fill" cx="15.6248" cy="16.2916" r="1.45833"/>
          <path class="svg-stroke" d="M2.0835 1.5L5.8335 4L7.91683 13.1667H16.2502L18.3335 6.08333H10.4168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </label>
      <a href="/profile" class="nav-additional__link user-profile">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="svg-fill" d="M19.2715 9.70893C18.4279 9.15365 17.8539 8.21135 17.2463 7.21377C17.175 7.0967 17.1034 6.97928 17.031 6.8617C18.1876 3.59491 16.619 0.968553 16.5497 0.855311L16.1316 0.171914L13.4199 3.32367C12.4423 2.89671 11.3109 2.68718 9.99998 2.68718C8.68912 2.68718 7.55764 2.89675 6.58003 3.32367L3.86827 0.171875L3.45027 0.855272C3.38105 0.968514 1.8123 3.59495 2.9689 6.86167C2.89656 6.97924 2.82496 7.0967 2.75367 7.21374C2.14601 8.21135 1.57203 9.15361 0.728397 9.70889L0 10.1884L0.720858 10.6791C0.770389 10.7128 5.68753 14.0639 6.80909 15.1854C7.16389 15.5402 7.44631 15.9084 7.71952 16.2644C8.33686 17.069 8.91998 17.829 9.99998 17.829C11.08 17.829 11.6631 17.069 12.2804 16.2644C12.5536 15.9084 12.836 15.5402 13.1909 15.1854C14.3124 14.0639 19.2295 10.7128 19.2791 10.6791L20 10.1884L19.2715 9.70893ZM15.8995 2.23175C16.1655 2.96683 16.4448 4.17042 16.1734 5.578C15.7957 5.07636 15.3645 4.59843 14.8336 4.17484C14.7132 4.07878 14.5897 3.98757 14.4633 3.90097L15.8995 2.23175ZM3.86905 3.02995C3.93671 2.72632 4.0196 2.45773 4.10116 2.23257L5.53667 3.90105C5.41022 3.98765 5.28679 4.07886 5.16644 4.17487C4.6348 4.59901 4.20312 5.07772 3.82503 5.58011C3.66249 4.74605 3.67683 3.8923 3.86905 3.02995ZM8.19752 14.9843C8.02846 14.7791 7.84323 14.5684 7.63459 14.3598C6.74471 13.4699 3.8412 11.4181 2.32007 10.3626C3.19788 10.0977 4.5639 9.78627 6.13401 9.78627C6.59753 9.78627 6.96487 9.93385 7.25706 10.2374C8.17084 11.1868 8.2353 13.3882 8.19752 14.9843ZM9.99998 16.6615C9.74686 16.6615 9.54006 16.5565 9.31986 16.3514C9.32361 16.2036 9.33014 16.0319 9.33736 15.8431C9.33908 15.7988 9.3408 15.7535 9.34252 15.7077H10.6575C10.6592 15.7535 10.661 15.7988 10.6626 15.8431C10.6698 16.0319 10.6764 16.2036 10.6801 16.3514C10.4599 16.5565 10.2531 16.6615 9.99998 16.6615ZM10.6267 14.5403H9.37334C9.38916 12.7704 9.22565 10.5992 8.09823 9.42783C7.58155 8.891 6.92073 8.61881 6.13405 8.61881C4.95362 8.61881 3.88464 8.77772 3.01917 8.97166C3.27765 8.59717 3.51581 8.2069 3.75077 7.82112C4.34694 6.84237 4.96343 5.83034 5.89456 5.08745C6.9344 4.25788 8.27729 3.8546 10 3.8546C11.7228 3.8546 13.0656 4.25784 14.1055 5.08745C15.0366 5.83034 15.6531 6.84241 16.2493 7.82112C16.4842 8.20686 16.7224 8.59717 16.9809 8.97166C16.1154 8.77772 15.0464 8.61881 13.866 8.61881C13.0793 8.61881 12.4185 8.891 11.9018 9.42783C10.7743 10.5992 10.6108 12.7704 10.6267 14.5403ZM12.3654 14.3599C12.1567 14.5685 11.9715 14.7791 11.8024 14.9843C11.7646 13.3882 11.8291 11.1868 12.7429 10.2374C13.0351 9.93385 13.4024 9.78631 13.8659 9.78631C15.4297 9.78631 16.7982 10.0984 17.6785 10.3635C16.157 11.4193 13.255 13.4702 12.3654 14.3599Z"/>
        </svg>
      </a>`)

    return additionalMenuDOM
}
export default Cart