export default class ThemesSwitch {
    constructor(switchBoxDOMElement, defaultTheme) {
        this.switchBoxDOMElement = switchBoxDOMElement
        this.defaultTheme = defaultTheme
    }

    theme = null
    bodyDOM = null
    currentThemeMetaData = null
    init () {
        this.theme = localStorage.getItem('theme') || this.defaultTheme
        this.bodyDOM = document.querySelector('body')
        this.currentThemeMetaData = [...document.getElementsByTagName("meta")].find(meta => meta.name === 'theme-color')
        this.currentThemeMetaData.setAttribute('content', this.theme)

        this.insertSwitchElementIntoDOM()
        this.initializeStyles()
    }

    themeSwitchHandler (DOMElementsForStyling) {
        this.initializeStyles(DOMElementsForStyling)
        this.currentThemeMetaData.setAttribute('content', this.theme)
        localStorage.setItem('theme', this.theme)
    }

    initializeStyles (DOMElementsForStyling) {
        this.switchBoxDOMElement.firstElementChild.checked ? this.theme = 'dark' : this.theme = 'light'
        this.bodyDOM.classList.toggle('theme--dark', this.theme === 'dark')
        this.bodyDOM.classList.toggle('theme--light', this.theme === 'light')
        if (DOMElementsForStyling) {
            DOMElementsForStyling.forEach(el => {
                el.classList.toggle('--theme-dark', this.theme === 'dark')
            })
        }
    }
    getSwitchHTMLTemplate () {
        return (
            `
            <input ${this.theme === 'dark' ? 'checked' : ''} type="checkbox" id="themeSwitch" name="theme-switch" class="theme-switch__input" />
            <label class="theme-switch__label" for="themeSwitch"></label>
        `
        )
    }
    insertSwitchElementIntoDOM () {
        this.switchBoxDOMElement.innerHTML = ''
        this.switchBoxDOMElement.innerHTML = this.getSwitchHTMLTemplate()
    }

}