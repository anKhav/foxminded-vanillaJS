export default class Countries {
    constructor(countriesBoxDOMElement) {
        this.countriesBoxDOMElement = countriesBoxDOMElement
    }

    apiBaseUrl = `https://restcountries.com/v3.1/`
    countries = null
    #notFoundImageUrl = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
    getCountryHTMLTemplate (country, cssClass = ''){
        return (
            `
            <div class="country ${cssClass}">
                        <div class="country__flag">
                            <img class="country__img" src=${country.flags ? country.flags.png : this.#notFoundImageUrl} alt=${country.flag || 'Not Found IMage'}>
                        </div>
                        <div class="country__details">
                            <h3 class="country__name">${country.name.official || '-'}</h3>
                            <p class="country__copulation">Population: <span>${country.population.toLocaleString() || '-'}</span></p>
                            <p class="country__region">Region: <span>${country.region || '-'}</span></p>
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
    async fetchCountries (queryParams, searchParams) {
        try {
            const res = await fetch(`${this.apiBaseUrl}/${queryParams.join('/')}?fields=${searchParams.join(',')}`)
            if (!res.ok) {
                throw new Error(res.statusText)
            } else {
                const data = await res.json()
                this.countries = data
                return data
            }
        } catch (e) {
            throw new Error(e.message)
        }
    }
    filterFetchedCountries (countries,countryName) {
        const data = countries.filter(country => {
            return country.name.common.toLowerCase().includes(countryName.toLowerCase())
        })
        if (data.length === 0){
            return {
                error:true,
                message:'Not Found'
            }
        }
        return data
    }
}