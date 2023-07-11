class Validator {
    #emailRegEx = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    #passwordRegEx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/)
    #generateValidationResultData (correct, message) {
        return {
            correct:correct,
            message:message
        }
    }
    isEmail (string) {
        if (this.#emailRegEx.test(string)){
            return this.#generateValidationResultData(true, 'Correct email')
        }
        return this.#generateValidationResultData(false, 'Incorrect email')
    }
    isCorrectPassword(string) {
        if (this.#passwordRegEx.test(string)){
            return this.#generateValidationResultData(true, 'Password correct')
        }
        return this.#generateValidationResultData(false, 'Password must contain at least one number, one lowercase and one uppercase letter and one special character')
    }
    isEqualPasswordEntries (password, confirmPassword) {
        if (password === confirmPassword){
            return this.#generateValidationResultData(true, 'Passwords have the same value.')
        }
        return this.#generateValidationResultData(false, 'Passwords must have the same value!')
    }
    isRequired (HTMLInputElement){
        if (HTMLInputElement.required) {
            return this.#generateValidationResultData(true, 'Input is required')
        }
        return this.#generateValidationResultData(false, 'Input is not required')
    }
}

