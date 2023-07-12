const inputFirstName = document.querySelector('#first-name')
const inputLastName = document.querySelector('#last-name')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputPasswordConfirm = document.querySelector('#password-confirm')
const button = document.querySelector('#button-confirm')


const validator = new Validator()


// Visualization correct/incorrect data //
const toggleCorrectInputVisuals = (inputDOM, data) => {
    const correctInputClass = 'input--correct'
    if (data.correct && !inputDOM.classList.contains(correctInputClass)) {
        inputDOM.classList.add(correctInputClass)
    } else if (!data.correct) {
        inputDOM.classList.remove(correctInputClass)
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
// Visualization correct/incorrect data //


// Initial validation //
(() => {
    const emailValidationData = validator.isEmail(inputEmail.value)
    const passwordValidationData = validator.isCorrectPassword(inputPassword.value)
    const passwordComparisonValidationData = validator.isEqualPasswordEntries(inputPassword.value, inputPasswordConfirm.value)
    const firstNameValidationData = validator.isRequired(inputFirstName)
    const lastNameValidationData = validator.isRequired(inputLastName)
    toggleCorrectInputVisuals(inputFirstName, firstNameValidationData)
    toggleCorrectInputVisuals(inputLastName, lastNameValidationData)
    toggleCorrectInputVisuals(inputEmail, emailValidationData)
    toggleCorrectInputVisuals(inputPassword, passwordValidationData)
    toggleCorrectInputVisuals(inputPasswordConfirm, passwordComparisonValidationData)
})()
// Initial validation //


const commonHandler = (e) => {
    e.preventDefault()
    const data = []
    const emailValidationData = validator.isEmail(inputEmail.value)
    const passwordValidationData = validator.isCorrectPassword(inputPassword.value)
    const passwordComparisonValidationData = validator.isEqualPasswordEntries(inputPassword.value, inputPasswordConfirm.value)
    const firstNameValidationData = validator.isRequired(inputFirstName)
    const lastNameValidationData = validator.isRequired(inputLastName)
    data.push({
        input:inputEmail,
        data:emailValidationData
    })
    data.push({
        input:inputPassword,
        data:passwordValidationData
    })
    data.push({
        input:inputPasswordConfirm,
        data:passwordComparisonValidationData
    })
    data.push({
        input:inputFirstName,
        data:firstNameValidationData
    })
    data.push({
        input:inputLastName,
        data:lastNameValidationData
    })
    const notValidDataArray = data.filter((item) => item.data.correct === false)
    console.log(notValidDataArray);
}

inputPassword.addEventListener('input', () => {
    const data = validator.isCorrectPassword(inputPassword.value)
    toggleCorrectInputVisuals(inputPassword, data)
})
inputPassword.addEventListener('change', () => {
    const data = validator.isCorrectPassword(inputPassword.value)
    insertErrorDOMElement(inputPassword, data)
})


inputEmail.addEventListener('input', () => {
    const data = validator.isEmail(inputEmail.value)
    toggleCorrectInputVisuals(inputEmail, data)
})
inputEmail.addEventListener('change', () => {
    const data = validator.isEmail(inputEmail.value)
    insertErrorDOMElement(inputEmail, data)
})


inputPasswordConfirm.addEventListener('input', () => {
    const data = validator.isEqualPasswordEntries(inputPassword.value, inputPasswordConfirm.value)
    toggleCorrectInputVisuals(inputPasswordConfirm, data)

})
inputPasswordConfirm.addEventListener('change', () => {
    const data = validator.isEqualPasswordEntries(inputPasswordConfirm.value)
    insertErrorDOMElement(inputPasswordConfirm, data)
})


inputFirstName.addEventListener('input', () => {
    const data = validator.isRequired(inputFirstName)
    toggleCorrectInputVisuals(inputFirstName, data)
})
inputLastName.addEventListener('input', () => {
    const data = validator.isRequired(inputLastName)
    toggleCorrectInputVisuals(inputLastName, data)
})


button.addEventListener('click',commonHandler)
