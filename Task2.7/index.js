import Dropdown from "./Dropdown.js";
import Countries from "./Countries.js";

const themeSwitchDOM = document.querySelector('#themeSwitch')
const bodyDOM = document.querySelector('body')
const dropdownDOMElement = document.querySelector('.dropdown')
const countriesBoxDOM = document.querySelector('.content')

const currentThemeMetaData = [...document.getElementsByTagName("meta")].find(meta => meta.name === 'theme-color')



const apiBaseUrl = `https://restcountries.com/v3.1`

const countries = new Countries(countriesBoxDOM)

let theme = currentThemeMetaData.content
const initializeStylesTheme = () => {
    console.log(theme);
    themeSwitchDOM.checked ? theme = 'dark' : theme = 'light'
    bodyDOM.classList.toggle('theme--dark', theme === 'dark')
    bodyDOM.classList.toggle('theme--light', theme === 'light')
}
initializeStylesTheme()

const themeToggler = () => {
    initializeStylesTheme()
    currentThemeMetaData.setAttribute('content', theme)
    const countriesDOM = countriesBoxDOM.querySelectorAll('.country')
    countriesDOM.forEach(el => {
        if (theme === 'dark'){
            el.classList.add('country--theme-dark')
        } else if (theme === 'light') {
            el.classList.remove('country--theme-dark')
        }
    })
    const dropdownDOM = document.querySelector('.dropdown')
    const dropdownChildrenArr = [...dropdownDOM.children]
    if (theme === 'dark') {
        dropdownDOM.classList.add('dropdown--theme-dark')
        dropdownChildrenArr.forEach(el => el.classList.add('dropdown--theme-dark'))
    } else {
        dropdownDOM.classList.remove('dropdown--theme-dark')
        dropdownChildrenArr.forEach(el => el.classList.remove('dropdown--theme-dark'))
    }
}
const fetchAndInsertCountriesByRegion = async (e) => {
    if (e.target.innerText !== 'Regions' && !e.target.classList.contains('dropdown__title-span')){
        countriesBoxDOM.innerHTML = `<div>Loading...</div>`
        const region = e.target.innerText.toLowerCase()
        const res = await fetch(`${apiBaseUrl}/region/${region}?fields=name,capital,population,flags,flag,region`)
        const data = await res.json()
        console.log(theme);
        if (theme === 'dark'){
            countries.insertCountriesDataIntoDOM(data, 'country--theme-dark')
        } else if (theme === 'light') {
            countries.insertCountriesDataIntoDOM(data)
        }
    }
}
const fetchAndInsertDropdownOptions = async () => {
    const res = await fetch(`${apiBaseUrl}/all`)
    const data = await res.json()
    const options = [...new Set(data.map(el => el.region))]
    const dropdown = new Dropdown(dropdownDOMElement, options)
    dropdown.init()
    if (theme === 'dark') {
        dropdownDOMElement.classList.add('dropdown--theme-dark')
        dropdown.dropdownList.classList.add('dropdown--theme-dark')
        dropdown.dropdownTitle.classList.add('dropdown--theme-dark')
    }
    dropdown.insertRegionTemplateIntoDom('dropdown__item')
}

(async function initialFetch () {
    await fetchAndInsertDropdownOptions()
    const res = await fetch(`${apiBaseUrl}/all?fields=name,capital,population,flags,flag,region`)
    const data = await res.json()
    if (theme === 'dark'){
        countries.insertCountriesDataIntoDOM(data, 'country--theme-dark')
    } else if (theme === 'light') {
        countries.insertCountriesDataIntoDOM(data)
    }
})()


dropdownDOMElement.addEventListener('click', fetchAndInsertCountriesByRegion)
themeSwitchDOM.addEventListener('change', themeToggler)
