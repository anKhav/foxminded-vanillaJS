class Todo {

    constructor(todosBox) {
        this.todosBox = todosBox
    }

    getTodoTemplate (todo) {
        return (
            `
            <div class="todo" id=Todo${todo.id}>
                <p class="todo__text">${todo.text}</p>
                <button class="button-edit">Edit</button>
                <button class="button-delete">Delete</button>
            </div>
            `
        )
    }
    addTodo(todoText) {
        const todo = {
            id:Math.random(),
            text:todoText
        }
        this.todosBox.insertAdjacentHTML('afterbegin', this.getTodoTemplate(todo))
        localStorageService.save(`Todo${todo.id}`)
    }
    editTodo(todo) {}
    deleteTodo() {}
    deleteAllTodos() {
        localStorageService.clear()
        this.todosBox.innerHTML = ''
    }
}