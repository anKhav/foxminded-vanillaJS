export default class Dropdown {
    constructor(dropdownBox, options) {
        this.dropdownBox = dropdownBox
        this.options = options
    }
    dropdownTitle = null
    dropdownList = null

    init () {
        this.dropdownTitle = this.dropdownBox.querySelector('.dropdown__title')
        this.dropdownList = this.dropdownBox.querySelector('.dropdown__list')
        this.dropdownBox.addEventListener('click', (e) => this.dropdownToggler(e))
    }
    dropdownToggler (e) {
        if(this.dropdownTitle !== e.target && e.target.innerText) {
            this.dropdownTitle.firstElementChild.innerText = e.target.innerText
        }
        this.dropdownList.classList.toggle('opened')
    }
    getOptionHTMLTemplate (optionData, optionClass) {
        return `<li class=${optionClass}>${optionData}</li>`
    }
    insertRegionTemplateIntoDom (optionCSSClass) {
        this.dropdownList.innerHTML = ''
        this.options.forEach(option => this.dropdownList.insertAdjacentHTML('afterbegin', this.getOptionHTMLTemplate(option, optionCSSClass)))
    }
}
