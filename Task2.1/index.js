class randomColor {
    hexCharacters = null
    buttonHex = null
    buttonRGB = null
    buttonRGBA = null
    mainBox = null
    color = null
    title = null

    init = () => {
        this.buttonHex = document.querySelector('#btn-hex')
        this.buttonRGB = document.querySelector('#btn-rgb')
        this.buttonRGBA = document.querySelector('#btn-rgba')
        this.mainBox = document.querySelector('#bg-box')
        this.title = document.querySelector('#bg-title')

        this.hexCharacters = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
        this.color = '#23ba37'
        this.title.innerText = this.color
        this.mainBox.style.backgroundColor = `${this.color}`
        this.buttonHex.addEventListener('click', () => this.colorHandler(this.generateHexColor))
        this.buttonRGB.addEventListener('click', () => this.colorHandler(this.generateRGBColor))
        this.buttonRGBA.addEventListener('click', () => this.colorHandler(this.generateRGBAColor))
    }

    getCharacter = (i) => {
        return this.hexCharacters[i]
    }
    generateHexColor =  () => {
        let hexColor = '#'
        for ( let i = 0; i < 6; i++){
            const randomPosition = Math.floor(Math.random() * this.hexCharacters.length)
            hexColor += this.getCharacter(randomPosition)
        }
        this.color = hexColor
        this.title.innerText = this.color
    }
    generateRGBColor =  () => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        this.color = `rgb(${r}, ${g}, ${b})`
        this.title.innerText = this.color
    }
    generateRGBAColor =  () => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const a = (Math.random() * 100 * 0.01).toFixed(2)
        this.color = `rgba(${r}, ${g}, ${b}, ${a})`
        this.title.innerText = this.color
    }
    addTitle = () => {
        this.mainBox.innerHtml = `<h1>this.color</h1>`
    }
    colorHandler =  (cb) => {
        cb()
        this.mainBox.style.backgroundColor = `${this.color}`
        this.addTitle()
    }
}

const generator = new randomColor()
generator.init()
