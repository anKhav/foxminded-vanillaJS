const submitButton = document.querySelector('#button-submit')
const clearTodosButton = document.querySelector('#button-clear-todos')
const input = document.querySelector('#input')
const mainBox = document.querySelector('#main-box')

const todo = new Todo(mainBox)
todo.insertTodosTemplatesIntoDOM()

if (input.value.length === 0 ) submitButton.disabled = true

const createTodo = async (e) => {
    e.preventDefault()
    await todo.addTodo(input.value)
    input.value = ''
    submitButton.disabled = true
}
submitButton.addEventListener('click', createTodo)
input.addEventListener('input', () => input.value.length === 0 ? submitButton.disabled = true : submitButton.disabled = false)
clearTodosButton.addEventListener('click', () => todo.deleteAllTodos())
