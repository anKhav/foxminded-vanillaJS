export default class ThemesSwitch {
    constructor(switchBoxDOMElement, defaultTheme) {
        this.switchBoxDOMElement = switchBoxDOMElement
        this.defaultTheme = defaultTheme
    }

    theme = null
    bodyDOM = null
    currentThemeMetaData = null
    init () {
        this.insertSwitchElementIntoDOM()
        this.theme = this.defaultTheme
        this.bodyDOM = document.querySelector('body')
        this.currentThemeMetaData = [...document.getElementsByTagName("meta")].find(meta => meta.name === 'theme-color')
        this.initializeStylesTheme()
    }

    themeSwitchHandler (styledElements) {
        this.initializeStylesTheme()
        this.currentThemeMetaData.setAttribute('content', this.theme)
        styledElements.forEach(el => {
            if (this.theme === 'dark'){
                el.classList.add('--theme-dark')
            } else if (this.theme === 'light') {
                el.classList.remove('--theme-dark')
            }
        })
    }

    initializeStylesTheme () {
        this.theme === 'light' ? this.checked = false : this.checked = true
        this.switchBoxDOMElement.firstElementChild.checked ? this.theme = 'dark' : this.theme = 'light'
        this.bodyDOM.classList.toggle('theme--dark', this.theme === 'dark')
        this.bodyDOM.classList.toggle('theme--light', this.theme === 'light')
    }
    getSwitchHTMLTemplate () {
        return (
            `
            <input type="checkbox" id="themeSwitch" name="theme-switch" class="theme-switch__input" />
            <label class="theme-switch__label" for="themeSwitch"></label>
        `
        )
    }
    insertSwitchElementIntoDOM () {
        this.switchBoxDOMElement.innerHTML = ''
        this.switchBoxDOMElement.innerHTML = this.getSwitchHTMLTemplate()
    }

}