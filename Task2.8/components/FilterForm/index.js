import Range from "../Range/index.js";
import {applyFilters} from "../../utils/filter.js";
import data from "../../data.js";

const FilterForm = (options, handlers) => {

    const topics = ['All','Forest','Fox Kids','Snow Fox','Other']

    const filterDOM = document.createElement('form')
    const topicsDOM = document.createElement('fieldset')
    topicsDOM.classList.add('topics')
    topicsDOM.innerHTML = `<span class="topics__title">Topic</span>
    ${topics.map(topic => {
        return (
            `<input type="radio" name="fox" value=${topic} id=${topic.toLowerCase()} ${topic === 'All' ? 'checked' : ''}>
            <label id="label" data-filter="topic" for=${topic.toLowerCase()}>${topic}</label>`
        )
    }).join('')}`
    const rangeDOM = document.createElement('fieldset')
    filterDOM.classList.add('shop__filter')

    const inputWrapperDOM = document.createElement('fieldset')
    inputWrapperDOM.classList.add('shop__search')

    const inputDOM = document.createElement('input')
    inputDOM.setAttribute('type', 'text')
    inputDOM.setAttribute('placeholder', 'Search')
    inputDOM.id = 'search__input'

    const inputLabelDOM = document.createElement('label')
    inputLabelDOM.classList.add('search__icon')
    inputLabelDOM.setAttribute('for', 'search__input')

    const {rangeInputDOM, priceDOM} = Range()

    inputWrapperDOM.append(inputDOM, inputLabelDOM)
    filterDOM.appendChild(inputWrapperDOM)

    topicsDOM.addEventListener('click', (e) => {
        if (e.target.dataset.filter === 'topic') {
            handlers.topic(e,applyFilters(data,topics,options))
        }
    })
    inputDOM.addEventListener('input', (e) => {
        handlers.search(e, applyFilters(data,topics,options))
    })
    rangeInputDOM.addEventListener('change', (e) => {
        handlers.price(e, applyFilters(data,topics,options))
    })

    applyFilters(data,topics,options)

    filterDOM.appendChild(topicsDOM)
    rangeDOM.appendChild(priceDOM)
    filterDOM.appendChild(rangeDOM)


    return {filterDOM, filteredItems:applyFilters(data,topics,options)}
}
export default FilterForm