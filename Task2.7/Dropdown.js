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
        document.addEventListener('click', (e) => {
            if (e.target === this.dropdownTitle.firstElementChild || e.target === this.dropdownTitle){
                this.dropdownList.classList.toggle('opened')
            } else {
                this.dropdownList.classList.remove('opened')
                if(e.target.classList.contains('dropdown__item')) {
                    this.dropdownTitle.innerText = e.target.innerText
                    cb(e)
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
