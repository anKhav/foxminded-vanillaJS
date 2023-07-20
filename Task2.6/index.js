const submitButton = document.querySelector('#button-submit')
const clearTodosButton = document.querySelector('#button-clear-todos')
const input = document.querySelector('#input')
const mainBox = document.querySelector('#main-box')

const todo = new Todo(mainBox)

const createTodo = (e) => {
    e.preventDefault()
    todo.addTodo(input.value)
}
clearTodosButton.addEventListener('click', () => todo.deleteAllTodos())
submitButton.addEventListener('click', createTodo)