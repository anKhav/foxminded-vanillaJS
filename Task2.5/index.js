const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todayBox = document.querySelector('#today-box')
const weekBox = document.querySelector('#week-box')
const resetButton = document.querySelector('#input-reset')

const forecast = new Forecast('a5c1b92dbb4058393c9124c91b253b8f')


const clearPreviousForecastDOM = () => {
    todayBox.innerHTML = ''
    weekBox.innerHTML = ''
}

const handler = async (e) => {
    e.preventDefault()
    weekBox.innerHTML = `<div class="loading">Loading...</div>`
    const data = await forecast.fetchForecast(input.value)
    if (data.message) {
        clearPreviousForecastDOM()
        weekBox.innerHTML = forecast.insertErrorHTMLTemplate(data.message)
    } else {
        clearPreviousForecastDOM()
        todayBox.innerHTML = forecast.insertTodayHTMLTemplate(forecast.todayForecast)
        forecast.otherWeekDaysForecast.map(day => weekBox.insertAdjacentHTML('beforeend', forecast.insertOneWeekDayTemplate(day)))
    }
}
resetButton.addEventListener('click', () => clearPreviousForecastDOM())
form.addEventListener('submit', handler)