export default class Countries {
    constructor(countriesBoxDOMElement) {
        this.countriesBoxDOMElement = countriesBoxDOMElement
    }
    getCountryHTMLTemplate (country, cssClass = ''){
        return (
            `
            <div class="country ${cssClass}">
                        <div class="country__flag">
                            <img class="country__img" src=${country.flags.png} alt=${country.flag}>
                        </div>
                        <div class="country__details">
                            <h3 class="country__name">${country.name.official}</h3>
                            <p class="country__copulation">Population: <span>${country.population.toLocaleString()}</span></p>
                            <p class="country__region">Region: <span>${country.region}</span></p>
                            <p class="country__capital">Capital: <span>${country.capital.length !== 0 ? country.capital[0] : '-'}</span></p>
                        </div>
            </div>
        `
        )
    }
    insertCountriesDataIntoDOM (countries, cssClass) {
        this.countriesBoxDOMElement.innerHTML = ''
        countries.forEach(country => this.countriesBoxDOMElement.insertAdjacentHTML('beforeend', this.getCountryHTMLTemplate(country, cssClass)))
    }
}