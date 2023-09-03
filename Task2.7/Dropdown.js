export default class Dropdown {
    constructor(dropdownBox, options) {
        this.dropdownBox = dropdownBox
        this.options = options
    }
    dropdownTitle = null
    dropdownList = null

    init (cb) {
        this.dropdownTitle = this.dropdownBox.querySelector('.dropdown__title')
        this.dropdownList = this.dropdownBox.querySelector('.dropdown__list')
        document.addEventListener('click', (event) => {
            if (event.target === this.dropdownTitle){
                this.dropdownList.classList.toggle('opened')
            } else {
                this.dropdownList.classList.remove('opened')
                if(event.target.classList.contains('dropdown__item')) {
                    this.dropdownTitle.innerText = event.target.innerText
                    cb(event)
                }
            }
        })
    }
    getOptionHTMLTemplate (optionData, optionClass) {
        return `<li class=${optionClass}>${optionData}</li>`
    }
    insertRegionTemplateIntoDom (optionCSSClass) {
        this.dropdownList.innerHTML = ''
        this.options.forEach(option => this.dropdownList.insertAdjacentHTML('afterbegin', this.getOptionHTMLTemplate(option, optionCSSClass)))
    }
}
