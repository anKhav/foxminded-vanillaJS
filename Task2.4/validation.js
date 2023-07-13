const inputFirstName = document.querySelector('#first-name')
const inputLastName = document.querySelector('#last-name')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputPasswordConfirm = document.querySelector('#password-confirm')
const button = document.querySelector('#button-confirm')

const validator = new Validator()

const toggleStyles = (inputDOM, data) => {
    const errorElement = inputDOM.parentElement.querySelector('.error-message')
    if (!errorElement && !data.correct) {
        inputDOM.insertAdjacentHTML('afterend', `<p class="error-message">${data.message}</p>`)
        inputDOM.classList.add('input--not-valid')
    } else if (errorElement && data.correct) {
        errorElement.remove()
        inputDOM.classList.remove('input--not-valid')
    }
}

const commonValidator = () => {
    const emailValidationData = validator.isEmail(inputEmail.value)
    const passwordValidationData = validator.isCorrectPassword(inputPassword.value)
    const passwordComparisonValidationData = validator.isEqualPasswordEntries(inputPassword.value, inputPasswordConfirm.value)
    const firstNameValidationData = validator.isRequired(inputFirstName)
    const lastNameValidationData = validator.isRequired(inputLastName)
    const data = [
        {
            input:inputFirstName,
            data:firstNameValidationData
        },
        {
            input:inputLastName,
            data:lastNameValidationData
        },
        {
            input:inputEmail,
            data:emailValidationData
        },
        {
            input:inputPassword,
            data:passwordValidationData
        },
        {
            input:inputPasswordConfirm,
            data:passwordComparisonValidationData
        },
    ]
    return data
}

const submitHandler = (e) => {
    e.preventDefault()
    const data = commonValidator()
    data.forEach(item => toggleStyles(item.input, item.data))
    const notValidInputs = data.filter(item => !item.data.correct)
    console.log(notValidInputs.length === 0);
    notValidInputs.length === 0 && console.log('Fetch some data')
}

button.addEventListener('click',submitHandler)
