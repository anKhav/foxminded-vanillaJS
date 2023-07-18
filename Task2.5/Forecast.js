class Forecast {
    constructor (apiKey){
        this.apiKey = apiKey
    }
    todayDate = null
    city = null
    todayForecast = {}
    otherWeekDaysForecast = []
    dayTime = '15:00:00'
    nightTime = '03:00:00'

    getDayTemp (day) {
        const res = day.forecast.find(el => el.dt_txt.includes(this.dayTime))
        if (!res) {
            return `${Math.round(day.forecast[0].main.temp)}°C`
        }
        return `${Math.round(res.main.temp)}°C`
    }
    getNightTemp (day) {
        const res = day.forecast.find(el => el.dt_txt.includes(this.nightTime))
        if (!res) {
            return `${Math.round(day.forecast[day.forecast.length - 1].main.temp_min)}°C`
        }
        return `${Math.round(res.main.temp)}°C`
    }

    insertTodayHTMLTemplate (data) {
        return `<div class="today">
                <div class="today__temperatures">
                    <p class="today__day">${this.getDayTemp(data)}</p>
                    <p class="today__night">${this.getNightTemp(data)}</p>
                </div>
            <div class="sity-wrapper">
                <h2>${this.city.name}, ${this.city.country}</h2>
                <h2 class="weather-state">${data.forecast[0].weather[0].description}</h2>
            </div>
            <div class="icon">
                <img class="weather-icon" src='http://openweathermap.org/img/w/${data.forecast[0].weather[0].icon}.png' alt="Weather Icon">
                <img class="foxminded-icon" src='./foxminded_icon.png' alt="Foxminded Icon">
            </div>
        </div>`
    }
    insertOneWeekDayTemplate (data) {
        return `<div class="today">
                <div class="today__temperatures">
                    <p class="today__day">${this.getDayTemp(data)}</p>
                    <p class="today__night">${this.getNightTemp(data)}</p>
                </div>
            <div class="sity-wrapper">
                <h2>${this.city.name}, ${this.city.country}</h2>
                <h2 class="weather-state">${data.forecast[0].weather[0].description}</h2>
            </div>
            <div class="icon">
                <img class="weather-icon" src='http://openweathermap.org/img/w/${data.forecast[0].weather[0].icon}.png' alt="Weather Icon">
                <img class="foxminded-icon" src='./foxminded_icon.png' alt="Foxminded Icon">
            </div>
        </div>`
    }
    insertErrorHTMLTemplate (errorMessage) {
        return `
        <div>${errorMessage}</div>
        `
    }
    setDays (list) {
        const daysList = list.map(day => day.dt_txt.split(' ').slice(0,1).join(''))
        return [...new Set(daysList)]
    }
    getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'short'});
    }

    async #fetchLocation(cityName){
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${this.apiKey}`)
            const data = await response.json();
            if (data.length !== 0) {
                return {
                    lat: data[0].lat,
                    lon: data[0].lon
                }
            } else {
                return 'Enter correct data'
            }
        } catch (e) {
            throw e
        }
    }
    async fetchForecast(cityName) {
        try {
            this.todayDate = new Date(Date.now()).getDate()
            const location = await this.#fetchLocation(cityName)
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${this.apiKey}`)
                const data = await response.json()
            console.log(data);
            this.city = data.city
                const days = this.setDays(data.list)
                const namedDaysForecast = days.reduce((acc, day) => {
                    const specificDayForecasts = data.list.filter(el => el.dt_txt.includes(day))
                    acc.push({dayName:this.getDayName(new Date(day)),day, forecast:specificDayForecasts})
                    return acc
                }, [])
                this.todayForecast = namedDaysForecast[0]

                namedDaysForecast.splice(0,1)
                this.otherWeekDaysForecast = namedDaysForecast
                return namedDaysForecast
        } catch (e) {
            throw e
        }
    }
}
// Object { lat: 50.4544, lon: 30.5157 }
