const Range = () => {
    const priceDOM = document.createElement('fieldset')
    priceDOM.classList.add('price')
    const priceTitleDOM = document.createElement('label')
    priceDOM.classList.add('price__title')
    priceTitleDOM.setAttribute('for', 'slider')
    const rangeDOM = document.createElement('div')
    rangeDOM.classList.add('range')
    const rangeContentDOM = document.createElement('div')
    rangeContentDOM.classList.add('range__content')
    const rangeSliderDOM = document.createElement('div')
    rangeSliderDOM.classList.add('range__slider')
    const rangeSliderLineDOM = document.createElement('div')
    rangeSliderLineDOM.classList.add('range__slider-line')
    rangeSliderLineDOM.id = 'range-line'
    const rangeThumbDOM = document.createElement('div')
    rangeThumbDOM.classList.add('range__thumb')
    rangeThumbDOM.id = 'range-thumb'
    const rangeInputDOM = document.createElement('input')
    rangeInputDOM.setAttribute('type', 'range')
    rangeInputDOM.setAttribute('min', '0')
    rangeInputDOM.setAttribute('max', '100')
    rangeInputDOM.setAttribute('value', '100')
    rangeInputDOM.setAttribute('step', '1')
    rangeInputDOM.id = 'slider'
    rangeInputDOM.classList.add('range__input')
    const rangeValueDOM = document.createElement('div')
    rangeValueDOM.classList.add('range__value')
    const rangeValueDataDOM = document.createElement('span')
    rangeValueDataDOM.classList.add('range__value-number')
    rangeValueDOM.id = 'range-number'

    rangeSliderDOM.appendChild(rangeSliderLineDOM)
    rangeContentDOM.append(rangeSliderDOM, rangeThumbDOM, rangeInputDOM)
    rangeDOM.appendChild(rangeContentDOM)
    rangeValueDOM.appendChild(rangeValueDataDOM)
    priceDOM.append(priceTitleDOM, rangeDOM, rangeValueDOM)

    const updateRangeValue = () => {
        rangeValueDOM.textContent = rangeInputDOM.value;
    };

    const updateRangeVisuals = () => {
        const thumbPosition = rangeInputDOM.value / rangeInputDOM.max;
        const space = rangeDOM.offsetWidth - rangeThumbDOM.offsetWidth;

        rangeThumbDOM.style.left = thumbPosition * space + "px";

        rangeSliderLineDOM.style.width = rangeInputDOM.value + "%";
    };
    rangeInputDOM.addEventListener("input", (e) => {
        updateRangeValue();
        updateRangeVisuals();
    });


    const initializeRangeSlider = () => {
        updateRangeValue();
        updateRangeVisuals();
    };


    document.addEventListener('DOMContentLoaded', initializeRangeSlider);
    return {priceDOM, rangeInputDOM}
}
export default Range