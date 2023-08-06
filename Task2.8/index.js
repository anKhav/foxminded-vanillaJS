const cartCheckbox = document.querySelector('#cart')
const cartBox = document.querySelector('.cart')
const burgerCheckbox = document.querySelector('#burger')
const burgerCheckboxLabel = document.querySelector('.burger-breadcrumbs')
const filter = document.querySelector('.filter')
const mainNavigation = document.querySelector('.nav-menu')

burgerCheckbox.checked = false
cartCheckbox.checked = false
document.addEventListener('click', (e) => {
    e.stopPropagation()
    const burgerAndCartEventTargets = [mainNavigation, cartCheckbox, ...[...cartBox.children].filter(el => !el.classList.contains('cart__button' && 'cart__button--close'))]
    const selectedTargets = burgerAndCartEventTargets.find(el => e.target.contains(el))
    if (e.target === burgerCheckbox || e.target === burgerCheckboxLabel) {
        burgerCheckboxLabel.style.visibility = 'hidden'
        document.body.classList.add('no-scroll')
        filter.classList.add('filter--on')
    } else if (e.target === cartCheckbox) {
        document.body.classList.add('no-scroll')
        filter.classList.add('filter--on')
    } else if (!selectedTargets){
        burgerCheckboxLabel.style = ''
        burgerCheckbox.checked = false
        cartCheckbox.checked = false
        document.body.classList.remove('no-scroll')
        filter.classList.remove('filter--on')
    }
})