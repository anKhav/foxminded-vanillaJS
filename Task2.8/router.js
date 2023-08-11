export const Router = () => {
    const menu = document.querySelector('.nav-menu')
    const navLinks = document.querySelectorAll('.nav__link')

    const changeLocation = (e) => {
        e.preventDefault()
        if (e.target.classList.contains('nav__link')){
            console.log(e.target.dataset.route)
            location.pathname = e.target.dataset.route
        }
    }
    menu.addEventListener('click', (e) => changeLocation(e))
}