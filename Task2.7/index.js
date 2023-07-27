const themeToggleCheckbox = document.querySelector('#themeSwitch')
const sectionOuter = document.querySelector('body')
const countriesDOMElements = [...document.querySelectorAll('.country')]
const formDOMElement = [...document.querySelector('.form')]
const currentThemeMetaData = [...document.getElementsByTagName("meta")].find(meta => meta.name === 'theme-color')
// console.log(currentThemeMetaData);

let theme = 'light'

const themeToggler = () => {
    themeToggleCheckbox.checked ? theme = 'dark' : theme = 'light'
    currentThemeMetaData.setAttribute('content', theme)
    console.log(currentThemeMetaData)
    sectionOuter.classList.toggle('theme--dark', theme === 'dark')
    sectionOuter.classList.toggle('theme--light', theme === 'light')
    countriesDOMElements.forEach(el => {
        el.classList.toggle('country--theme-dark', theme === 'dark')
    })
    formDOMElement.classList.toggle('.form--theme-dark', theme === 'dark')
}
themeToggleCheckbox.addEventListener('change', themeToggler)