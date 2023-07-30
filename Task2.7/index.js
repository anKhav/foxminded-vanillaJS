import ThemesSwitch from "./ThemesSwitch.js";
import Dropdown from "./Dropdown.js";
import Countries from "./Countries.js";

const themeSwitchBoxDOM = document.querySelector('.theme-switch')
const dropdownDOMElement = document.querySelector('.dropdown')
const countriesBoxDOM = document.querySelector('.content')
const formDOM = document.querySelector('.form')
const formInputDOM = document.querySelector('.form__input')

const countriesInstance = new Countries(countriesBoxDOM)
const themeSwitchInstance = new ThemesSwitch(themeSwitchBoxDOM, 'light')

formInputDOM.value = ''
themeSwitchInstance.init();

(async function initialFetch () {
    try {
        await fetchAndInsertDropdownOptions()
        const data = await countriesInstance.fetchCountries(['all'], ['name','capital','population','flags','flag','region'])
        themeSwitchInstance.theme === 'light' ? countriesInstance.insertCountriesDataIntoDOM(data) : countriesInstance.insertCountriesDataIntoDOM(data, '--theme-dark')
    } catch (e) {
        countriesBoxDOM.innerHTML = `<div>${e.message}</div>`
    }
})()

const themeSwitchHandler = () => {
    const countriesDOM = countriesBoxDOM.querySelectorAll('.country')
    const dropdownDOM = document.querySelector('.dropdown')
    const dropdownChildrenArr = [...dropdownDOM.children]
    themeSwitchInstance.themeSwitchHandler([...countriesDOM, dropdownDOM, ...dropdownChildrenArr])
}
async function fetchAndInsertCountriesByRegion  (event) {
    if (event.target.innerText !== 'Regions') {
        countriesBoxDOM.innerHTML = `<div>Loading...</div>`
        try {
            const region = event.target.innerText.toLowerCase()
            const data = await countriesInstance.fetchCountries(['region', region], ['name','capital','population','flags','flag','region'])
            themeSwitchInstance.theme === 'light' ? countriesInstance.insertCountriesDataIntoDOM(data) : countriesInstance.insertCountriesDataIntoDOM(data, '--theme-dark')
        } catch (e) {
            countriesBoxDOM.innerHTML = `<div>${e.message}</div>`
        }
    }
}
async function fetchAndInsertDropdownOptions (){
    try {
        const data = await countriesInstance.fetchCountries(['all'], ['region'])
        const options = [...new Set(data.map(el => el.region))]
        const dropdown = new Dropdown(dropdownDOMElement, options)
        dropdown.init(fetchAndInsertCountriesByRegion)
        themeSwitchInstance.theme === 'light' ? dropdown.insertRegionTemplateIntoDom('dropdown__item') : dropdown.insertRegionTemplateIntoDom('dropdown__item --theme-dark')
        themeSwitchInstance.initializeStyles([dropdownDOMElement, dropdown.dropdownList, dropdown.dropdownTitle])
    } catch (e) {
        countriesBoxDOM.innerHTML = `<div>Something went wrong</div>`
    }
}
async function fetchSpecificCountry (e) {
    e.preventDefault()
    try {
        const formData = new FormData(e.target);
        const data = await countriesInstance.fetchCountries(['name', formData.get('country')], ['name', 'capital', 'population', 'flags', 'flag', 'region'])
        themeSwitchInstance.theme === 'light' ? countriesInstance.insertCountriesDataIntoDOM(data) : countriesInstance.insertCountriesDataIntoDOM(data, '--theme-dark')
    } catch (e) {
        countriesBoxDOM.innerHTML = `<div>${e.message}</div>`
    }
}

formDOM.addEventListener('submit', fetchSpecificCountry)
themeSwitchBoxDOM.addEventListener('change', themeSwitchHandler)




