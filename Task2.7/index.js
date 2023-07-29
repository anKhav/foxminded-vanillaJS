import ThemesSwitch from "./ThemesSwitch.js";
import Dropdown from "./Dropdown.js";
import Countries from "./Countries.js";

const themeSwitchBoxDOM = document.querySelector('.theme-switch')
const dropdownDOMElement = document.querySelector('.dropdown')
const countriesBoxDOM = document.querySelector('.content')

const apiBaseUrl = `https://restcountries.com/v3.1`

const countries = new Countries(countriesBoxDOM)
const themeSwitch = new ThemesSwitch(themeSwitchBoxDOM, 'light')
themeSwitch.init()

const themeToggler = () => {
    const countriesDOM = countriesBoxDOM.querySelectorAll('.country')
    const dropdownDOM = document.querySelector('.dropdown')
    const dropdownChildrenArr = [...dropdownDOM.children]
    themeSwitch.themeSwitchHandler([...countriesDOM, dropdownDOM, ...dropdownChildrenArr])
}
async function fetchAndInsertCountriesByRegion  (e) {
    if (e.target.innerText !== 'Regions') {
        countriesBoxDOM.innerHTML = `<div>Loading...</div>`
        const region = e.target.innerText.toLowerCase()
        const res = await fetch(`${apiBaseUrl}/region/${region}?fields=name,capital,population,flags,flag,region`)
        const data = await res.json()
        if (themeSwitch.theme === 'dark'){
            countries.insertCountriesDataIntoDOM(data, 'country--theme-dark')
        } else if (themeSwitch.theme === 'light') {
            countries.insertCountriesDataIntoDOM(data)
        }
    }
}
const fetchAndInsertDropdownOptions = async () => {
    const data = await countries.fetchCountries(['all'], ['region'])
    const options = [...new Set(data.map(el => el.region))]
    const dropdown = new Dropdown(dropdownDOMElement, options)
    dropdown.init(fetchAndInsertCountriesByRegion)
    if (themeSwitch.theme === 'dark') {
        dropdownDOMElement.classList.add('--theme-dark')
        dropdown.dropdownList.classList.add('--theme-dark')
        dropdown.dropdownTitle.classList.add('--theme-dark')
    }
    dropdown.insertRegionTemplateIntoDom('dropdown__item')
}

(async function initialFetch () {
    await fetchAndInsertDropdownOptions()
    const data = await countries.fetchCountries(['all'], ['name','capital','population','flags','flag','region'])
    if (themeSwitch.theme === 'dark'){
        countries.insertCountriesDataIntoDOM(data, '--theme-dark')
    } else if (themeSwitch.theme === 'light') {
        countries.insertCountriesDataIntoDOM(data)
    }
})()

themeSwitchBoxDOM.addEventListener('change', themeToggler)




