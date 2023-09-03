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
    await fetchAndInsertDropdownOptions()
    try {
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
        countriesBoxDOM.innerHTML = `<div class="error">Loading...</div>`
        const region = event.target.innerText.toLowerCase()
        try {
            const data = await countriesInstance.fetchCountries(['region', region], ['name','capital','population','flags','flag','region'])
            if (countriesInstance.countries && formInputDOM.value.length !== 0){
                const filtered = countriesInstance.filterFetchedCountries(data, formInputDOM.value.toLowerCase())
                if (!filtered.error) {
                    themeSwitchInstance.theme === 'light' ? countriesInstance.insertCountriesDataIntoDOM(filtered) : countriesInstance.insertCountriesDataIntoDOM(filtered, '--theme-dark')
                } else {
                    countriesBoxDOM.innerHTML = `<div class="error">${filtered.message}</div>`
                }
            } else {
                themeSwitchInstance.theme === 'light' ? countriesInstance.insertCountriesDataIntoDOM(data) : countriesInstance.insertCountriesDataIntoDOM(data, '--theme-dark')
            }
        } catch (e) {
            countriesBoxDOM.innerHTML = `<div class="error">${e.message}</div>`
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
        countriesBoxDOM.innerHTML = `<div class="error">Something went wrong</div>`
    }
}
async function fetchSpecificCountry (e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    try {
        if (dropdownDOMElement.firstElementChild.innerText === 'Regions'){
            const data = await countriesInstance.fetchCountries(['name', formData.get('country')], ['name', 'capital', 'population', 'flags', 'flag', 'region'])
            themeSwitchInstance.theme === 'light' ? countriesInstance.insertCountriesDataIntoDOM(data) : countriesInstance.insertCountriesDataIntoDOM(data, '--theme-dark')
        } else {
            const data = await countriesInstance.fetchCountries(['region', dropdownDOMElement.firstElementChild.innerText], ['name','capital','population','flags','flag','region'])
            const filtered = countriesInstance.filterFetchedCountries(data, formInputDOM.value.toLowerCase())
            if (!filtered.error) {
                themeSwitchInstance.theme === 'light' ? countriesInstance.insertCountriesDataIntoDOM(filtered) : countriesInstance.insertCountriesDataIntoDOM(filtered, '--theme-dark')
            } else {
                countriesBoxDOM.innerHTML = `<div class="error">${filtered.message}</div>`
            }
        }
    } catch (e) {
        countriesBoxDOM.innerHTML = `<div class="error">${e.message}</div>`
    }
}

formDOM.addEventListener('submit', fetchSpecificCountry)
themeSwitchBoxDOM.addEventListener('change', themeSwitchHandler)




