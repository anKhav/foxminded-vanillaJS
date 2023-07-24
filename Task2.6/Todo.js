class Todo {

    constructor(todosBox) {
        this.todosBox = todosBox
    }
    #todoId = 1

    getTodoTemplate (todo) {
        return (
            `
            <div class="todo" id=todo${todo.id}>
                <p class="todo__text">${todo.text}</p>
                <button class="button-edit" data-edit_todo=${todo.id}>
                    <img src="./checkbox-outline.svg" alt="Checkbox icon">
                    Edit
                </button>
                <button class="button-delete" data-delete_todo=${todo.id}>
                    <span>&#215;</span>
                    Delete
                </button>
            </div>
            `
        )
    }
    async addTodo(todoText) {
        const todo = {
            id:this.#todoId,
            text:todoText
        }
        const todos = localStorageService.getData('todos') || []
        todos.push(todo)
        this.#todoId++
        await localStorageService.save('todos', todos)
        await this.insertTodosTemplatesIntoDOM()
    }
    async insertTodosTemplatesIntoDOM () {
        this.todosBox.innerHTML = ''
        const todos = localStorageService.getData('todos')
        todos && await todos.forEach(todo => this.todosBox.insertAdjacentHTML('afterbegin', this.getTodoTemplate(todo)))
        const todosDDOM = [...document.querySelectorAll('.todo')]
        if (todosDDOM.length !== 0) {
            const todosEditButtons = todosDDOM.map(todo => [...todo.children].find(el => todo.id.includes(el.dataset.edit_todo)))
            todosEditButtons.forEach(button => button.addEventListener('click', () => this.editTodo(+button.dataset.edit_todo)))
            const todosDeleteButtons = todosDDOM.map(todo => [...todo.children].find(el => todo.id.includes(el.dataset.delete_todo)))
            todosDeleteButtons.forEach(button => button.addEventListener('click', () => this.deleteTodo(+button.dataset.delete_todo)))
        }
    }
     editTodo(id) {
        let todos = localStorageService.getData('todos')
        let todo = todos.find(todo => todo.id === id)
        const modal = document.querySelector('.modal')
        const input = modal.querySelector('input')
        input.value = todo.text
        modal.classList.add('modal--opened')
         input.focus()
        const confirmEditingButton = modal.querySelector('button')
        confirmEditingButton.addEventListener('click', async (e) => {
            e.preventDefault()
            let index = todos.indexOf(todo);
            if (index !== -1) {
                todos[index] = {...todo, text:input.value};
            }
            await localStorageService.save('todos', todos)
            await this.insertTodosTemplatesIntoDOM()
            modal.classList.remove('modal--opened')
        })
    }
    async deleteTodo(id) {
        const todos = localStorageService.getData('todos')
        await localStorageService.save('todos', todos.filter(todo => todo.id !== id))
        await this.insertTodosTemplatesIntoDOM()
    }
    deleteAllTodos() {
        localStorageService.clear()
        this.todosBox.innerHTML = ''
    }
}