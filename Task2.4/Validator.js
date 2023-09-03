class Validator {

    #generateValidationResultData (correct, message) {
        return {
            correct:correct,
            message:message
        }
    }
    isEmail (string) {
        const emailRegEx = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
        if (emailRegEx.test(string)){
            return this.#generateValidationResultData(true, 'Correct email')
        }
        return this.#generateValidationResultData(false, 'Incorrect email')
    }
    isCorrectPassword(string) {
        const passwordRegEx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/)
        if (passwordRegEx.test(string)){
            return this.#generateValidationResultData(true, 'Password correct')
        }
        return this.#generateValidationResultData(false, 'Password must contain at least one number, one lowercase and one uppercase letter and one special character')
    }
    isEqualPasswordEntries (password, confirmPassword) {
        if (password === confirmPassword && confirmPassword.length !== 0){
            return this.#generateValidationResultData(true, 'Passwords have the same value.')
        }
        return this.#generateValidationResultData(false, 'Passwords must have the same value and cannot be empty!')
    }
    isRequired (HTMLInputElement){
        if (HTMLInputElement.required && HTMLInputElement.value.length === 0) {
            return this.#generateValidationResultData(false, 'Input is required')
        }
        return this.#generateValidationResultData(true, 'Input is not required or you provide value to it!')
    }
    isDataDDMMYYYY (date){
        const ddmmyyyyRegex = new RegExp(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/s)
        if (ddmmyyyyRegex.test(date)){
            return this.#generateValidationResultData(true, 'Correct date.')
        }
        return this.#generateValidationResultData(false, 'Incorrect date')
    }
}

