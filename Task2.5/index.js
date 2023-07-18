const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todayBox = document.querySelector('#today')
const weekBox = document.querySelector('#week')
const inputClear = document.querySelector('#input-clear')

const forecast = new Forecast('a5c1b92dbb4058393c9124c91b253b8f')


let isLoading = false
const handler = async (e) => {
    isLoading = true
    e.preventDefault()
    weekBox.innerHTML = `<div class="loading">Loading...</div>`
    const data = await forecast.fetchForecast(input.value)
    if (data) isLoading = false
    weekBox.innerHTML = ``
    todayBox.innerHTML = forecast.insertTodayHTMLTemplate(forecast.todayForecast)
    forecast.otherWeekDaysForecast.map(day => weekBox.insertAdjacentHTML('beforeend', forecast.insertOneWeekDayTemplate(day)))
}
form.addEventListener('submit', handler)