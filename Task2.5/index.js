class Forecast {
    constructor (apiKey){
        this.apiKey = apiKey
    }
    box = document.querySelector('.box')
    #cityLocation = {
        lat:null,
        lon:null
    }
    #days = []
    #forecast = []
    get getDays () {
        return this.#days
    }
    get getLocation () {
        return this.#cityLocation
    }
    setDays (list) {
        const daysList = list.map(day => day.dt_txt.split(' ').slice(0,1).join(''))
        return [...new Set(daysList)]
    }
    getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'long'});
    }

    async #fetchLocation(cityName){
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${this.apiKey}`)
            const data = await response.json();
             return {
                lat: data[0].lat,
                lon: data[0].lon
            }
        } catch (e) {
            throw e
        }
    }
    async fetchForecast(cityName) {
        try {
            const location = await this.#fetchLocation(cityName)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${this.apiKey}`)
            const data = await response.json()
            const days = this.setDays(data.list)
            const daysNames = days.map(day => this.getDayName(new Date(day)))
            const namedDaysForecast = days.reduce((acc, day) => {
                const specificDayForecasts = data.list.filter(el => el.dt_txt.includes(day))
                acc.push({day:this.getDayName(new Date(day)), forecast:specificDayForecasts})
                return acc
            }, [])
            this.#forecast = namedDaysForecast
            return namedDaysForecast
        } catch (e) {
            throw e
        }
    }

    insertTemplate() {
        console.log(this.#forecast)
    }
}

const forecast = new Forecast('a5c1b92dbb4058393c9124c91b253b8f')
const init = async () => {
    await forecast.fetchForecast('Kyiv')
    forecast.insertTemplate()
}
init()