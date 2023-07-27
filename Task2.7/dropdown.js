const dropdown = document.querySelector('.dropdown')
const dropdownTitle = document.querySelector('.dropdown__title')
const dropdownList = document.querySelector('.dropdown__list')
const arrowDown = dropdown.querySelector('.arrow-down')
const arrowUp = dropdown.querySelector('.arrow-up')
arrowUp.classList.add('arrow--hidden')

const dropdownOpener = (e) => {
    const dropdownTitle = dropdown.querySelector('.dropdown__title')
    if(dropdownTitle !== e.target && e.target.innerText) {
        console.log( dropdownTitle.firstElementChild.innerText)
        console.log(e.target.innerText);
        dropdownTitle.firstElementChild.innerText = e.target.innerText
    }
    dropdownList.classList.toggle('opened')
}
dropdown.addEventListener('click', dropdownOpener)