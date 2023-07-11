const inputFirstName = document.querySelector('#first-name')
const inputLastName = document.querySelector('#last-name')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputPasswordConfirm = document.querySelector('#password-confirm')
const button = document.querySelector('#button-confirm')
const form = document.querySelector('.form')

const validator = new Validator()

const toggleCorrectInputVisuals = (inputDOM, data) => {
    if (data.correct && !inputDOM.classList.contains('input--correct')) {
        inputDOM.classList.add('input--correct')
    } else if (!data.correct) {
        inputDOM.classList.remove('input--correct')
    }
}

const insertErrorDOMElement = (inputDOM, data) => {
    const errorElement = inputDOM.parentElement.querySelector('.error-message')
    if (!errorElement && !inputDOM.correct) {
        inputDOM.insertAdjacentHTML('afterend', `<p class="error-message">${data.message}</p>`)
    } else {
        errorElement.remove()
    }
}
const commonHandler = (e) => {
    e.preventDefault()
    const data = []
    const emailRes = validator.isEmail(inputEmail.value)
    const passwordRes = validator.isCorrectPassword(inputPassword.value)
    const passwordsComparsion = validator.isEqualPasswordEntries(inputPassword.value, inputPasswordConfirm.value)
    data.push({
        input:inputEmail,
        data:emailRes
    })
    data.push({
        input:inputPassword,
        data:passwordRes
    })
    data.push({
        input:inputPasswordConfirm,
        data:passwordsComparsion
    })
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget)
    console.log(formData);
}
inputPassword.addEventListener('input', (e) => {
    const data = validator.isCorrectPassword(inputPassword.value)
    toggleCorrectInputVisuals(inputPassword, data)
})
inputPassword.addEventListener('change', (e) => {
    const data = validator.isCorrectPassword(inputPassword.value)
    insertErrorDOMElement(inputPassword, data)
})
inputEmail.addEventListener('input', (e) => {
    const data = validator.isEmail(inputEmail.value)
    toggleCorrectInputVisuals(inputEmail, data)
})
inputEmail.addEventListener('change', (e) => {
    const data = validator.isEmail(inputEmail.value)
    insertErrorDOMElement(inputEmail, data)
})
inputPasswordConfirm.addEventListener('input', (e) => {
    const data = validator.isEqualPasswordEntries(inputPassword.value, inputPasswordConfirm.value)
    toggleCorrectInputVisuals(inputPasswordConfirm, data)

})
inputPasswordConfirm.addEventListener('change', (e) => {
    const data = validator.isEqualPasswordEntries(inputPasswordConfirm.value)
    insertErrorDOMElement(inputPasswordConfirm, data)
})
button.addEventListener('click',commonHandler)